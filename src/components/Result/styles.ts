import styled from 'styled-components';
import { mobile } from '../../utils/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;

  ${mobile(`
    width: 100%;
    gap: 10px;
  `)}
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const LastModified = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
