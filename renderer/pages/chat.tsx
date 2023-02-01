import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
`;

function Chat() {
  return (
    <React.Fragment>
      <Head>
        <title>Chat - Nextron (with-typescript)</title>
      </Head>
      <Container>Chat</Container>
    </React.Fragment>
  );
}

export default Chat;
