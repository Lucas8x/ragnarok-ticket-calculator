import styled from 'styled-components';
import { phone } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: flex-end;

  width: 75px;
  height: auto;

  border-right: 1px solid #fff;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${phone(`
    display: none;
  `)}
`;

export const GithubLink = styled.a`
  margin-bottom: 30px;

  > svg {
    width: 35px;
    height: 35px;
    color: #fff;
    fill: #fff;
  }
`;
