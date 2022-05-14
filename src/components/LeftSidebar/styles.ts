import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: flex-end;

  width: 75px;

  border-right: 1px solid #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
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
