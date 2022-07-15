import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductsListView } from '../ProductsListView/ProductsListView';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { Wrapper } from './App.styles';
import { GuestLayout } from '../HuestLayout';
import { ProductCardView } from '../ProductCardView/ProductCardView';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <Wrapper>
          <Routes>
            <Route path="/" element={<GuestLayout />}>
              <Route path="/product" element={<ProductsListView />} />
              <Route path="/product/:id" element={<ProductCardView />} />
              <Route path="/admin/add" element={<ProductCardView />} />
            </Route>
          </Routes>
        </Wrapper>
      </MainTemplate>
    </>
  );
};
