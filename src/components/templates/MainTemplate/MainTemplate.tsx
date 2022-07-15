import React from 'react';
import { Header } from '../../Header/Header';
import { Wrapper } from './MainTemplate.styles';

interface Props {
  children: JSX.Element;
}

export const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};
