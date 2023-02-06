import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import UserColumn from '../components/UserColumn';
import styled from 'styled-components';
import {
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
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
  }>({ img: '', name: '', introducing: '' });
  const [users, setUsers] = useState<
    { name: string; img: string; introducing: string; id: number }[]
  >([]);

  const getData = useCallback(async () => {
    const { currentUser } = getAuth();

    try {
      const q = query(collection(db, 'user'));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc: any) => {
        if (doc.data().id !== currentUser.uid) {
          setUsers((prev) => [doc.data(), ...prev]);
        } else {
          setMe(doc.data());
        }
      });
    } catch (e) {}
  }, []);

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>홈</title>
      </Head>
      <Container>
        <UserColumn data={me}></UserColumn>
        <Division></Division>
        <Title>친구 {users.length}</Title>
        {users.map((user) => (
          <UserColumn data={user} key={user.id}></UserColumn>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Home;
