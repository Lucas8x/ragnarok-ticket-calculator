import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
    //font-family: 'Nunito', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button, input {
    outline: 0;
    border: 0;
  }
  button {
    cursor: pointer;
  }
`;
