import React from 'react';
import { StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/product">Products</StyledLink>
      <StyledLink to="/cart">Cart</StyledLink>
      <StyledLink to="/account">Login</StyledLink>
    </Wrapper>
  );
};
