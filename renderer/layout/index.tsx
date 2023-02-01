import styled from 'styled-components';
import { HiUser } from 'react-icons/hi';
import { RiChat1Fill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Header = styled.div`
  width: 100px;
  background-color: #e1e2e2;
  border-right: 1px solid #bfbfbf;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding: 30px 0;
`;

const Button = styled.button<{ isItNow: boolean }>`
  border: none;
  background-color: transparent;
  opacity: ${(props) => (props.isItNow ? 1 : 0.5)};
`;

const Body = styled.div`
  flex: 1;
  background-color: white;
  padding: 30px;
`;

const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BodyHeaderText = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const goToHome = useCallback(() => {
    router.push('/home');
  }, []);

  const goToChat = useCallback(() => {
    router.push('/chat');
  }, []);

  return (
    <Container>
      <Header>
        <Button onClick={goToHome} isItNow={router.pathname === '/home'}>
          <HiUser color="#666666" size={35}></HiUser>
        </Button>
        <Button onClick={goToChat} isItNow={router.pathname === '/chat'}>
          <RiChat1Fill color="#666666" size={35}></RiChat1Fill>
        </Button>
      </Header>
      <Body>
        <BodyHeader>
          <BodyHeaderText>
            {router.pathname === '/home' ? '유저 리스트' : '채팅'}
          </BodyHeaderText>
          {router.pathname === '/home' ? null : (
            <Button isItNow={true}>
              <IoAddCircleSharp color="#666666" size={35}></IoAddCircleSharp>
            </Button>
          )}
        </BodyHeader>
        {children}
      </Body>
    </Container>
  );
}

export default Layout;
