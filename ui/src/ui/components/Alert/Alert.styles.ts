import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: absolute;
  width: 360px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.colors.primary};
  text-align: center;
  width: 100%;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.palette.colors.link};
  margin-top: 16px;
  text-align: center;
  width: 100%;
`;

export const HelpLabelContainer = styled.p`
  bottom: 20vh;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const HelpLabel = styled.p`
  color: ${({ theme }) => theme.palette.colors.secondary};
  font-size: 1em;
  text-align: center;
  width: 100%;
`;
