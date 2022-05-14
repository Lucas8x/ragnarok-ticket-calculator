import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;

    colors: {
      primary: string;
      secondary: string;
    };
  }
}
