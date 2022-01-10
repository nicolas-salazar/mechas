import styled from 'styled-components';

export const MainLabel = styled.p`
  font-size: 1.2em;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
`;

export const AgoAccent = styled.span`
  color: ${({ theme }) => theme.palette.colors.link};
`;
