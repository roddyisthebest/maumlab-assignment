import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../firebase';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [headerMode, setHeaderMode] = useState<boolean>(false);
  useEffect(() => {
    if (router.pathname === '/chat' || router.pathname === '/home') {
      setHeaderMode(true);
    } else {
      setHeaderMode(false);
    }
  }, [router]);

  return headerMode ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
