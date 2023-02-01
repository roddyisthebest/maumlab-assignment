import { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  height: 100px;
  display: flex;
  border: none;
  background: transparent;
`;

const Image = styled.div<{ url: string }>`
  width: 100px;
  height: 100%;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  border: 1px solid #eeeeee;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  padding: 20px;
  align-items: flex-start;
`;

const Name = styled.span`
  font-size: 23px;
  color: black;
  font-weight: 500;
`;

const Introducing = styled.span`
  font-size: 15px;
  color: #a3a3a3;
`;

function User({
  data,
}: {
  data: {
    img: string;
    name: string;
    introducing: string;
  };
}) {
  const onClicked = useCallback(() => {
    alert('채팅하실래요?');
  }, []);

  return (
    <Container onClick={onClicked}>
      <Image url={data.img}></Image>
      <Info>
        <Name>{data.name}</Name>
        <Introducing>{data.introducing}</Introducing>
      </Info>
    </Container>
  );
}

export default User;
