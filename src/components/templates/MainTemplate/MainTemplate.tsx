import React from 'react';
import { Header } from '../../Header/Header';
// import { Navigation } from '../../Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';

interface Props {
  children: JSX.Element;
}

export const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      {/* <Navigation /> */}
      {children}
    </Wrapper>
  );
};
