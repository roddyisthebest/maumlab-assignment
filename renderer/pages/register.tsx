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
  height: 180px;
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

  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [nicknameValid, setNicknameValid] = useState<boolean>(false);

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

  const onSubmit = useCallback(async () => {
    if (emailValid && passwordValid && nicknameValid) {
      try {
        await registerEmail(email, password, nickname);
        if (
          confirm(
            `${nickname}님! 성공적으로 가입되었습니다!\n 로그인페이지로 이동하시겠습니까?`
          )
        ) {
          router.push('/login');
        }
      } catch ({ code }) {
        if (code === 'auth/email-already-in-use') {
          alert('등록된 이메일입니다.');
        } else {
          alert(code);
        }
        console.log(code);
      }
    } else {
      let message = '';
      if (!emailValid) {
        message += '아이디 (이메일) 형식에 맞지 않습니다.\n';
      }
      if (!passwordValid) {
        message += '비밀번호 (8자리 이상, 대문자 포함) 형식에 맞지 않습니다.\n';
      }
      if (!nicknameValid) {
        message += '닉네임 (2자리 이상, 10자리 미만) 형식에 맞지 않습니다.';
      }

      alert(message);
    }
  }, [email, password, nickname, emailValid, passwordValid, nicknameValid]);

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
  return (
    <React.Fragment>
      <Head>
        <title>회원가입</title>
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
              placeholder="ID를 입력해주세요."
              onChange={onChangeEmail}
              value={email}
            ></Input>
          </InputWrapper>
          <InputWrapper isThisTop={true}>
            <Input
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePassword}
              value={password}
              type="password"
            ></Input>
          </InputWrapper>
          <InputWrapper isThisTop={false}>
            <Input
              placeholder="닉네임을 입력해주세요."
              onChange={onChangeNickname}
              value={nickname}
            ></Input>
          </InputWrapper>
        </InputsWrapper>
        <Button onClick={onSubmit}>회원가입</Button>
        <Link href="/login">로그인하기</Link>
      </Container>
    </React.Fragment>
  );
}

export default Register;
