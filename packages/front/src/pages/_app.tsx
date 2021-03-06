import {ChakraProvider, ColorModeScript, theme} from '@chakra-ui/react';
import {css, Global} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

const App = ({Component, pageProps}: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      }),
  );

  const SafeHydrate = dynamic(() => import('../components/safe_hydrate'), {ssr: false});

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta content="width=device-width,initial-scale=1" name="viewport" />
      </Head>
      <ColorModeScript />
      <ChakraProvider resetCSS={false} theme={theme}>
        <Global
          styles={css`
            ${emotionNormalize}
          `}
        />
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
