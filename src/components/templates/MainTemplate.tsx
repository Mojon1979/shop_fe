import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';
import { Navigation } from '../Navigation';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  background-color: #00373a;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 25% 75%;
  overflow-y: hidden;
`;

interface Props {
  children: JSX.Element;
}

export const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      {children}
    </Wrapper>
  );
};
