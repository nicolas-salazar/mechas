import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.black};
  background-image: url(./assets/mechas-scene.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
