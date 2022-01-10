import styled from 'styled-components';

export const BodyContainer = styled.div.attrs({
  className: 'animate__animated animate__fadeIn animate__slow',
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
`;

export const FooterContainer = styled.div.attrs({
  className: 'animate__animated animate__fadeIn animate__slow',
})`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colors.black};
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;
