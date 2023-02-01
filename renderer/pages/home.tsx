import React, { useState } from 'react';
import Head from 'next/head';
import UserColumn from '../components/UserColumn';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 25px 0;
  flex-direction: column;
`;

const Division = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dedede;
`;

const Title = styled.span`
  color: #a3a3a3;
  font-size: 16px;
`;

function Home() {
  const [me, setMe] = useState<{
    name: string;
    img: string;
    introducing: string;
  }>({
    name: '하니',
    img: 'https://media.bunjang.co.kr/product/210651557_1_1673002681_w360.jpg',
    introducing: 'omg',
  });
  const [users, setUsers] = useState<
    { name: string; img: string; introducing: string }[]
  >([
    {
      name: '해린',
      img: 'https://pbs.twimg.com/media/FldPH1qaYAI6jai?format=jpg&name=large',
      introducing: '냐옹',
    },
    {
      name: '다니엘',
      img: 'https://www.kukinews.com/data/kuk/cache/2022/09/08/kuk202209080356.680x.0.jpg',
      introducing: '헹냐헹야',
    },
  ]);
  return (
    <React.Fragment>
      <Head>
        <title>홈</title>
      </Head>
      <Container>
        <UserColumn data={me}></UserColumn>
        <Division></Division>
        <Title>친구 100</Title>
        {users.map((user) => (
          <UserColumn data={user} key={user.name}></UserColumn>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Home;
