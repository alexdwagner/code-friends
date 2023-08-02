import '../app/globals.css'; 
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
  <Component {...pageProps} />
  <ReactQueryDevtools initialIsOpen={false} />  
  </QueryClientProvider>
);
  }

export default MyApp;
