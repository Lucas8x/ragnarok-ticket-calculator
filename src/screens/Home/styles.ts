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

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 20px;

  background: linear-gradient(#fff, #fff) no-repeat center/1px 100%;
`;
