import '@/styles/globals.css';

import Head from 'next/head';

import { Footer } from '@/components/Footer/Index';
import { Header } from '@/components/Header/Index';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
