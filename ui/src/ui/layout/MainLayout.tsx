import React from 'react';
import { MainContainer } from './MainLayout.styles';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default MainLayout;
