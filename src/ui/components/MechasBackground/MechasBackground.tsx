import React from 'react';
import { MainContainer } from './MechasBackground.styles';

const MechasBackground: React.FC = ({ children }) => {
  return (
    <>
      <MainContainer className="animate__animated animate__fadeIn animate__slower">
        {children}
        <div className="stars" />
      </MainContainer>
    </>
  );
};

export default MechasBackground;
