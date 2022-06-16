import styled, { css } from 'styled-components';
import { mobile } from '../../utils/media';

export const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 20px;

  border-bottom: 1px solid #fff;
`;

export const Title = styled.h1`
  margin-left: 20px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;

  ${mobile(css`
    margin-left: 10px;
    font-size: 18px;
  `)}
`;
