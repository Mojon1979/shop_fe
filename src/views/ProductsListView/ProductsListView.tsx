import React, { useEffect, useState } from 'react';
import { GetAllProductsRes } from 'types';
import { ProductsListItem } from '../../components/ProductsListItem/ProductsListItem';
import {
  BtnPagination,
  BtnWrapper,
  ListWrapper,
} from './ProductsListView.styles';

interface Props {
  isAdmin: boolean;
}

export const ProductsListView = ({ isAdmin }: Props) => {
  const PAGINATION_COUNT = 3;
  const [products, setProducts] = useState<GetAllProductsRes[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const refreshProducts = async (off: number) => {
    setIsLoading(true);
    setProducts(null);
    setOffset(off);
    const res = await fetch(
      `http://localhost:3001/${
        isAdmin ? 'admin' : 'product'
      }/${offset}/${PAGINATION_COUNT}`
    );
    const data: GetAllProductsRes[] = await res.json();

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      setErrorMessage(error.message);
      return;
    }

    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    refreshProducts(offset);
  }, []);

  useEffect(() => {
    refreshProducts(offset);
  }, [offset]);

  const btnHandleClick = (off: number) => {
    setOffset(off);
  };

  const btn = products
    ? products.map((product, index) => (
        <BtnPagination
          type="button"
          key={product.id}
          onClick={() =>
            btnHandleClick(index === 0 ? 0 : PAGINATION_COUNT * index)
          }
        >
          {index + 1}
        </BtnPagination>
      ))
    : null;

  const productCards = (
    <>
      <ListWrapper>
        {products ? (
          products.map((product) => (
            <ProductsListItem
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onProductsChange={() => refreshProducts(offset)}
            />
          ))
        ) : (
          <div>
            <p>
              <strong>{errorMessage}</strong>
            </p>
          </div>
        )}
      </ListWrapper>
      <BtnWrapper>{btn}</BtnWrapper>
    </>
  );

  return !isLoading ? productCards : null;
};
