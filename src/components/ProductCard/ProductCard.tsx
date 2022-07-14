import React from 'react';
import { GetAllProductsRes } from 'types';
import { Link } from 'react-router-dom';
import { BtnLink, Wrapper } from './ProductCard.styles';

interface Props {
  product: GetAllProductsRes;
}

export const ProductCard = ({ product: { id, name, price, url } }: Props) => {
  return (
    <Wrapper>
      <li>
        <h2>{name}</h2>
      </li>
      <li>
        <img src={`${url}300`} alt={name} />
      </li>
      <li>
        <p>
          <strong>{price.toFixed(2)}$</strong>
        </p>
      </li>
      <li>
        <ul>
          <BtnLink to={`/product/card/${id}`}>Details</BtnLink>
          <BtnLink to={`/product/cart/${id}`}>Add to Cart</BtnLink>
        </ul>
      </li>
    </Wrapper>
  );
};
