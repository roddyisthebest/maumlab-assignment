import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuth();
  const router = useRouter();
  const [headerMode, setHeaderMode] = useState<boolean>(false);
  useEffect(() => {
    if (router.pathname === '/chat' || router.pathname === '/home') {
      setHeaderMode(true);
    } else {
      setHeaderMode(false);
    }

    if (getAuth().currentUser) {
      if (router.pathname === '/login' || router.pathname === 'register') {
        router.push('/home');
      }
    } else {
      if (
        router.pathname === '/home' ||
        router.pathname === '/room' ||
        router.pathname === '/chat'
      ) {
        router.push('/login');
      }
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
