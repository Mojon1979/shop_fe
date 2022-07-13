import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  grid-area: 1/2/2/3;
  display: flex;
  align-items: center;
  position: relative;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #c0bcbc;
  margin: 0 20px;
  font-size: 25px;
  &:last-child {
    position: absolute;
    right: 25px;
  }
  :hover {
    text-shadow: 1px 1px #c0bcbc;
    transition: 0.3s;
  }
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/product">Products</StyledLink>
      <StyledLink to="/cart">Cart</StyledLink>
      <StyledLink to="/account">Login</StyledLink>
    </Wrapper>
  );
};
