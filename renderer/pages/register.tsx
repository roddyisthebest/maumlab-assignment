import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { RiChat1Fill } from 'react-icons/ri';
import { registerEmail } from '../firebase';
import { useRouter } from 'next/router';
const Container = styled.div`
  background: #ffe742;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 20px 0;
`;

const InputsWrapper = styled.div`
  min-width: 300px;
  height: 240px;
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div<{ isThisTop: boolean }>`
  flex: 1;
  padding: 0px 10px;
  display: flex;
  border-bottom: ${(props) => (props.isThisTop ? '1px solid #E2E2E2' : 'none')};
`;

const Input = styled.input`
  flex: 1;
  font-size: 16px;
  border: none;
  outline: none;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  min-width: 300px;
  height: 60px;
  border-radius: 10px;
  background-color: #3a2f2a;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

function Register() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [introducing, setIntroducing] = useState<string>('');

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [nicknameValid, setNicknameValid] = useState<boolean>(false);
  const [introducingValid, setIntroducingValid] = useState<boolean>(false);

  const onChangeEmail = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setEmail(value);
    },
    []
  );

  const onChangePassword = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setPassword(value);
    },
    []
  );

  const onChangeNickname = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setNickname(value);
    },
    []
  );

  const onChangeIntroducing = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setIntroducing(value);
    },
    []
  );

  const onSubmit = useCallback(async () => {
    if (emailValid && passwordValid && nicknameValid && introducingValid) {
      try {
        await registerEmail(email, password, nickname, introducing);
        alert(`${nickname}???! ??????????????? ?????????????????????!`);
        router.push('/home');
      } catch ({ code }) {
        if (code === 'auth/email-already-in-use') {
          alert('????????? ??????????????????.');
        } else {
          alert(code);
        }
        console.log(code);
      }
    } else {
      let message = '';
      if (!emailValid) {
        message += '????????? (?????????) ????????? ?????? ????????????.\n';
      }
      if (!passwordValid) {
        message += '???????????? (8?????? ??????, ????????? ??????) ????????? ?????? ????????????.\n';
      }
      if (!nicknameValid) {
        message += '????????? (2?????? ??????, 10?????? ??????) ????????? ?????? ????????????.';
      }
      if (!introducingValid) {
        message += '???????????? (3?????? ??????, 15?????? ??????) ????????? ?????? ????????????.';
      }

      alert(message);
    }
  }, [
    email,
    password,
    nickname,
    emailValid,
    passwordValid,
    nicknameValid,
    introducingValid,
  ]);

  useEffect(() => {
    const emailRule =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setEmailValid(emailRule.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    setPasswordValid(passwordRule.test(password));
  }, [password]);

  useEffect(() => {
    setNicknameValid(nickname.length > 1 && nickname.length < 10);
  }, [nickname]);

  useEffect(() => {
    setIntroducingValid(introducing.length > 2 && introducing.length < 15);
  }, [introducing]);
  return (
    <React.Fragment>
      <Head>
        <title>????????????</title>
      </Head>
      <Container>
        <RiChat1Fill
          size={150}
          color="#3A2F2A"
          style={{ marginTop: 50, marginBottom: 30 }}
        ></RiChat1Fill>
        <InputsWrapper>
          <InputWrapper isThisTop={true}>
            <Input
              placeholder="ID??? ??????????????????."
              onChange={onChangeEmail}
              value={email}
            ></Input>
          </InputWrapper>
          <InputWrapper isThisTop={true}>
            <Input
              placeholder="??????????????? ??????????????????."
              onChange={onChangePassword}
              value={password}
              type="password"
            ></Input>
          </InputWrapper>
          <InputWrapper isThisTop={true}>
            <Input
              placeholder="???????????? ??????????????????."
              onChange={onChangeNickname}
              value={nickname}
            ></Input>
          </InputWrapper>
          <InputWrapper isThisTop={false}>
            <Input
              placeholder="??????????????? ??????????????????."
              onChange={onChangeIntroducing}
              value={introducing}
            ></Input>
          </InputWrapper>
        </InputsWrapper>
        <Button onClick={onSubmit}>????????????</Button>
        <Link href="/login">???????????????</Link>
      </Container>
    </React.Fragment>
  );
}

export default Register;
