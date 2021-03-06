import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductsListView } from '../ProductsListView/ProductsListView';
import { MainTemplate } from '../../components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';
import { Wrapper } from './App.styles';
import { GuestLayout } from '../HuestLayout';
import { ProductCardView } from '../ProductCardView/ProductCardView';
import { AdminAddProductView } from '../AdminAddProductView/AdminAddProductView';
import { AdminProductCardView } from '../AdminProductCardView/AdminProductCardView';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <Wrapper>
          <Routes>
            <Route path="/" element={<GuestLayout />}>
              <Route
                path="/product"
                element={<ProductsListView isAdmin={false} />}
              />
              <Route path="/product/:id" element={<ProductCardView />} />
            </Route>
            <Route path="/admin" element={<ProductsListView isAdmin />} />
            <Route path="/admin/card/:id" element={<AdminProductCardView />} />
            <Route path="/admin/add" element={<AdminAddProductView />} />
          </Routes>
        </Wrapper>
      </MainTemplate>
    </>
  );
};
