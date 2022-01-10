import styled from 'styled-components';

export const MainLabel = styled.p.attrs({
  className: 'animate__animated animate__fadeIn animate__delay-2s',
})`
  font-size: 1.35em;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
`;

export const AgoAccent = styled.span`
  color: ${({ theme }) => theme.palette.colors.link};
`;

export const ForeverAccent = styled.span`
  color: ${({ theme }) => theme.palette.colors.secondary};
`;
