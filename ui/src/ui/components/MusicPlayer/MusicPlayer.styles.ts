import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  padding: 4px;
`;

export const SongMetadataContainer = styled.div`
  display: inline-flex;
  gap: 3px;
`;

export const AuthorLabel = styled.div`
  color: ${({ theme }) => theme.palette.colors.white};
`;

export const SongNameLabel = styled.div`
  color: ${({ theme }) => theme.palette.colors.link};
`;
