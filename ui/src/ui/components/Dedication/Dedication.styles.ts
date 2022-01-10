import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  padding: 32px;
`;

export const Message = styled.h1`
  color: ${({ theme }) => theme.palette.colors.primary};
  font-size: 2.15em;
  text-align: center;
`;

export const AuthorLabel = styled.p`
  color: ${({ theme }) => theme.palette.colors.secondary};
  font-size: 1em;
  text-align: right;
  width: 100%;
`;
