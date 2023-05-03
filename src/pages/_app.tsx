import '@/styles/globals.css';

import Head from 'next/head';
import { Provider } from 'react-redux';

import { Footer } from '@/components/Footer/Index';
import { Header } from '@/components/Header/Index';
import { store } from '@/store/store';

import type { AppProps } from 'next/app';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
      </Head>
      <Loading load={loading} />
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
