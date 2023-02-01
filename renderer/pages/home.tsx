import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>홈</title>
      </Head>
      <Container>Home</Container>
    </React.Fragment>
  );
}

export default Home;
