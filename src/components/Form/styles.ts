import styled from 'styled-components';
import { X } from '@styled-icons/feather';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  gap: 25px;
  padding-right: 150px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 6px;

  border: 2px solid white;
  padding: 15px 15px 25px;

  /*border-top: 2px solid;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 15px 15px 25px 0;*/
`;

export const Top = styled.div`
  display: flex;
`;

export const Error = styled.span`
  color: red;
  font-weight: 500;
`;

export const XIcon = styled(X)`
  width: 25px;
  height: 25px;
  color: white;
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  align-self: flex-end;

  font-size: medium;

  color: white;
  background: none;
`;
