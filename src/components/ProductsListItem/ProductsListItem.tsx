import React from 'react';
import { GetAllProductsRes } from 'types';
import { DeleteBtn, Item, Wrapper } from './ProductsListItem.styles';
import { BtnLink } from '../BtnLink/BtnLink.styles';

interface Props {
  product: GetAllProductsRes;
  isAdmin: boolean;
  onProductsChange: () => void;
}

export const ProductsListItem = ({
  product: { id, name, price, url },
  isAdmin,
  onProductsChange,
}: Props) => {
  const deleteProduct = async (): Promise<void> => {
    if (!window.confirm(`Are you sure want to remove ${name} ?`)) {
      return;
    }

    const res = await fetch(`http://localhost:3001/admin/${id}`, {
      method: 'DELETE',
    });

    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      alert(`Error occurred: ${error.message}`);
      return;
    }

    onProductsChange();
  };

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
            <BtnLink to={`/${isAdmin ? 'admin/card' : 'product'}/${id}`}>
              Details
            </BtnLink>
            {isAdmin ? (
              <DeleteBtn type="button" onClick={deleteProduct}>
                Delete
              </DeleteBtn>
            ) : (
              <BtnLink to={`/product/cart/${id}`}>Add to Cart</BtnLink>
            )}
          </ul>
        </li>
      </Item>
    </Wrapper>
  );
};
