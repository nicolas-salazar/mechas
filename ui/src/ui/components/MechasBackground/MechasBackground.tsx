import React from 'react';
import { MainContainer } from './MechasBackground.styles';

const USE_DELAY = true;

const MechasBackground: React.FC = ({ children }) => {
  return (
    <>
      <MainContainer
        className={`animate__animated animate__fadeIn ${
          USE_DELAY ? 'animate__delay-2s' : ''
        } animate__slower`}
      >
        {children}
        <div className="stars" />
      </MainContainer>
    </>
  );
};

export default MechasBackground;
