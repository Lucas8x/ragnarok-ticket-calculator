import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 20px;

  background: linear-gradient(#fff, #fff) no-repeat center/1px 100%;

  > div:last-child {
    padding-left: 40px;
  }
`;
