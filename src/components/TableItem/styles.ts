import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  gap: 15px;

  background-color: #fff;

  :first-child {
    border-radius: 4px 4px 0 0;
  }

  :last-child {
    border-radius: 0 0 4px 4px;
  }
`;

export const Name = styled.span`
  width: 75px;
  margin-left: 10px;

  color: black;
  font-size: 16px;
  font-weight: 500;

  border-right: 1px solid #ccc;
`;

export const Value = styled.span`
  font-size: 16px;
  color: black;
`;
