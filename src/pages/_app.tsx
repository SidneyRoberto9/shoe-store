import '@/styles/globals.css';

import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { Footer } from '@/components/Footer/Index';
import { Header } from '@/components/Header/Index';
import { Loading } from '@/components/Loading';
import { CategoryProvider } from '@/context/useCategory';
import { store } from '@/store/store';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));

    return () => {
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
      router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
      </Head>
      <Loading load={loading} />
      <Provider store={store}>
        <CategoryProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </CategoryProvider>
      </Provider>
    </>
  );
}
