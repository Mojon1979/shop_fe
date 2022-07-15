import React from 'react';
import { GetAllProductsRes } from 'types';
import { Item, Wrapper } from './ProductsListItem.styles';
import { BtnLink } from '../BtnLink/BtnLink.styles';

interface Props {
  product: GetAllProductsRes;
}

export const ProductsListItem = ({
  product: { id, name, price, url },
}: Props) => {
  return (
    <Wrapper>
      <Item>
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
            <BtnLink to={`/product/${id}`}>Details</BtnLink>
            <BtnLink to={`/product/cart/${id}`}>Add to Cart</BtnLink>
          </ul>
        </li>
      </Item>
    </Wrapper>
  );
};
