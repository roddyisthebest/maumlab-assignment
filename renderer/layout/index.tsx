import styled from 'styled-components';
import { HiUser } from 'react-icons/hi';
import { RiChat1Fill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import Popup from '../components/Popup';
import AddFriends from '../components/AddFriends';
import { signoutEmail } from '../firebase';
const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Header = styled.div`
  width: 100px;
`;

const HeaderInstance = styled.div`
  background-color: #e1e2e2;
  border-right: 1px solid #bfbfbf;
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding: 30px 0;
  height: 100%;
  position: fixed;
  width: 100px;
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
  margin-bottom: 25px;
`;

const BodyHeaderText = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

const ButtonText = styled.span`
  color: #666666;
  font-size: 15px;
  font-weight: 600;
`;

const Division = styled.div`
  width: 100%;
  height: 1px;
  background-color: #bfbfbf;
`;

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);

  const goToHome = useCallback(() => {
    router.push('/home');
  }, []);

  const goToChat = useCallback(() => {
    router.push('/chat');
  }, []);

  const setVisibilityToTrue = useCallback(() => {
    setVisibility(true);
  }, []);

  const logout = useCallback(async () => {
    try {
      if (confirm('정말 로그아웃 하시겠습니까?')) {
        await signoutEmail();
        router.push('/login');
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderInstance>
          <Button onClick={goToHome} isItNow={router.pathname === '/home'}>
            <HiUser color="#666666" size={35}></HiUser>
          </Button>
          <Button onClick={goToChat} isItNow={router.pathname === '/chat'}>
            <RiChat1Fill color="#666666" size={35}></RiChat1Fill>
          </Button>
          <Division></Division>
          <Button onClick={logout} isItNow={true}>
            <ButtonText>로그아웃</ButtonText>
          </Button>
        </HeaderInstance>
      </Header>
      <Body>
        <BodyHeader>
          <BodyHeaderText>
            {router.pathname === '/home' ? '유저 리스트' : '채팅'}
          </BodyHeaderText>
          {router.pathname === '/home' ? null : (
            <Button isItNow={true} onClick={setVisibilityToTrue}>
              <IoAddCircleSharp color="#666666" size={35}></IoAddCircleSharp>
            </Button>
          )}
        </BodyHeader>
        {children}
      </Body>
      <Popup visibility={visibility} setVisibility={setVisibility}>
        <AddFriends setVisibility={setVisibility} />
      </Popup>
    </Container>
  );
}

export default Layout;
