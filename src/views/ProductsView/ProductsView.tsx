import React, { useEffect, useState } from 'react';
import { GetAllProductsRes } from 'types';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { Wrapper } from './ProductsView.styles';

export const ProductsView = () => {
  const [products, setProducts] = useState<GetAllProductsRes[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refreshProducts = async () => {
    setIsLoading(true);
    setProducts(null);

    const res = await fetch('http://localhost:3001/product');
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
    refreshProducts();
  }, []);

  const productCards = (
    <Wrapper>
      {products ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div>
          <p>
            <strong>{errorMessage}</strong>
          </p>
        </div>
      )}
    </Wrapper>
  );

  return !isLoading ? productCards : null;
};
