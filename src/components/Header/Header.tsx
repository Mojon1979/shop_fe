import React from 'react';
import { StyledLink, Wrapper } from './Header.styles';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <Wrapper>
      <h1>
        <StyledLink to="/">Small shop</StyledLink>
      </h1>
      <Navigation />
    </Wrapper>
  );
};
