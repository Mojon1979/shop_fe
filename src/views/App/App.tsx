import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductsView } from '../ProductsView/ProductsView';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { Wrapper } from './App.styles';
import { GuestLayout } from '../HuestLayout';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <Wrapper>
          <Routes>
            <Route path="/" element={<GuestLayout />}>
              <Route path="/product" element={<ProductsView />} />
            </Route>
          </Routes>
        </Wrapper>
      </MainTemplate>
    </>
  );
};
