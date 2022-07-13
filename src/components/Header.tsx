import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.h1`
  grid-area: 1/1/2/2;
  margin: 25px;
  box-shadow: 0px 0px 5px #c0bcbc;
  :hover {
    box-shadow: 0px 0px 8px #c0bcbc;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  text-decoration: none;
  color: #c0bcbc;
`;

export const Header = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Small shop</StyledLink>
    </Wrapper>
  );
};
