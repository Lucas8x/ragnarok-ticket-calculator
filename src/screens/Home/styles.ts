import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: row;

  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 0 20px 0;
`;
