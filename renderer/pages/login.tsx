import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { RiChat1Fill } from 'react-icons/ri';

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
  height: 120px;
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

function Login() {
  return (
    <React.Fragment>
      <Head>
        <title>로그인</title>
      </Head>
      <Container>
        <RiChat1Fill
          size={150}
          color="#3A2F2A"
          style={{ marginTop: 50, marginBottom: 30 }}
        ></RiChat1Fill>
        <InputsWrapper>
          <InputWrapper isThisTop={true}>
            <Input placeholder="ID를 입력해주세요."></Input>
          </InputWrapper>
          <InputWrapper isThisTop={false}>
            <Input placeholder="비밀번호를 입력해주세요."></Input>
          </InputWrapper>
        </InputsWrapper>
        <Button>로그인</Button>
        <Link href="/">회원가입하기</Link>
      </Container>
    </React.Fragment>
  );
}

export default Login;
