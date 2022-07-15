import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetOneProductRes } from 'types';
import { DescriptionWrapper, Wrapper } from './ProductCard.styles';
// import { BtnLink } from '../../components/BtnLink/BtnLink.styles';

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

  const productCard = (
    <Wrapper>
      {product ? (
        <>
          <img src={`${product.url}500`} alt="" />
          <DescriptionWrapper>
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
                {/* <li> */}
                {/*  <BtnLink to={`/product/cart/${id}`}>Add to Cart</BtnLink> */}
                {/* </li> */}
              </ul>
            </li>
          </DescriptionWrapper>
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
