import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key='1'>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='application-name' content='RO Ticket Calculator' />
          <link rel='manifest' href='/manifest.json' />
          <meta
            name='description'
            content='ragnarok promotional ticket calculator'
          />
          <meta
            name='keywords'
            content='ragnarok promotional ticket calculator'
          />
          <meta name='theme-color' content='#1B1C1D' />
          {/* FONTS */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          {/* ICONS */}
          <link rel='shortcut icon' href='favicon.png' type='image/png' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/favicon-16x16.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
