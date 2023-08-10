import '../app/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';
import { AuthStateProvider } from '../../state/AuthContext'; // Update the import path if needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={new QueryClient()}>
        <AuthStateProvider> {/* Wrap the application with AuthStateProvider */}
          <Component {...pageProps} />
        </AuthStateProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
