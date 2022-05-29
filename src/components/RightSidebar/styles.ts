import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75px;
  height: 100vh;

  border-left: 1px solid #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SwitchButton = styled.button`
  margin-top: 20px;
  background: none;

  > svg {
    width: 25px;
    height: 25px;
    color: #fff;
    stroke-width: 2px;
  }
`;
