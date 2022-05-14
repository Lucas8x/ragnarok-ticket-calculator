import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global';
import { Themes } from '../styles/themes';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Themes.dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
