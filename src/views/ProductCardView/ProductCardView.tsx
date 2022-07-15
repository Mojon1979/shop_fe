import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetOneProductRes } from 'types';
import styled from 'styled-components';

export const ProductCardView = () => {
  const [product, setProduct] = useState<GetOneProductRes | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  const refreshProduct = async () => {
    setIsLoading(true);
    setProduct(null);

    const res = await fetch(`http://localhost:3001/product/${id}`);
    const data: GetOneProductRes = await res.json();

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      setErrorMessage(error.message);
      return;
    }

    setProduct(data);
    setIsLoading(false);
  };

  useEffect(() => {
    refreshProduct();
  }, []);

  const Wrapper = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
    height: 100%;
  `;

  const productCard = (
    <Wrapper>
      {product ? (
        <>
          <div>
            <img src={`${product.url}500`} alt="" />
          </div>
          <ul>
            <li>
              <h2>{product.name}</h2>
            </li>
            <li>
              <p>{product.description}</p>
            </li>
            <li>
              <ul>
                <li>
                  <p>
                    Price: <strong>{product.price.toFixed(2)}$</strong>
                  </p>
                </li>
                <li>
                  <Link to={`/product/cart/${id}`}>Add to Cart</Link>
                </li>
              </ul>
            </li>
          </ul>
        </>
      ) : (
        <div>
          <p>
            <strong>{errorMessage}</strong>
          </p>
        </div>
      )}
    </Wrapper>
  );

  return !isLoading ? productCard : null;
};
