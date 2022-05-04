import {Head, Html, Main, NextScript} from 'next/document';

const MyDocument = () => (
  <Html lang="ja">
    <Head>
      <meta charSet="UTF-8" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

// eslint-disable-next-line import/no-default-export
export default MyDocument;
