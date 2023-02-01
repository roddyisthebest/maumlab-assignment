import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import ChatColumn from '../components/ChatColumn';
const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 25px 0;
  flex-direction: column;
`;

function Chat() {
  const [rooms, setRooms] = useState<
    { name: string; img: string; lastMsg: string; type: 'multi' | 'single' }[]
  >([
    {
      name: '해린',
      img: 'https://pbs.twimg.com/media/FldPH1qaYAI6jai?format=jpg&name=large',
      lastMsg: '냐옹',
      type: 'single',
    },
    {
      name: '다니엘',
      img: 'https://www.kukinews.com/data/kuk/cache/2022/09/08/kuk202209080356.680x.0.jpg',
      lastMsg: '헹냐헹야',
      type: 'single',
    },
    {
      name: '다니엘,하니',
      img: 'https://www.kukinews.com/data/kuk/cache/2022/09/08/kuk202209080356.680x.0.jpg',
      lastMsg: '헹냐헹야',
      type: 'multi',
    },
  ]);

  return (
    <React.Fragment>
      <Head>
        <title>채팅</title>
      </Head>
      <Container>
        {rooms.map((room) => (
          <ChatColumn data={room}></ChatColumn>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Chat;
