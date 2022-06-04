import styled from 'styled-components';
import { phone } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75px;
  height: auto;

  border-left: 1px solid #fff;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${phone(`
    display: none;
  `)}
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
