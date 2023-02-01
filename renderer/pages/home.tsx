import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  background: red;
  flex: 1;
`;

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <Container>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/login">
            <a>Go to login page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </Container>
    </React.Fragment>
  );
}

export default Home;
