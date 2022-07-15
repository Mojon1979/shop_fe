import React from 'react';
import { StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/product">Products</StyledLink>
      <StyledLink to="/cart">Cart</StyledLink>
      <StyledLink to="/admin">Admin Products</StyledLink>
      <StyledLink to="/admin/add">Add Product</StyledLink>
      <StyledLink to="/account">Login</StyledLink>
    </Wrapper>
  );
};
