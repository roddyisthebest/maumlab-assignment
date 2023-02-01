import { useCallback } from 'react';
import styled from 'styled-components';
import { HiUserGroup } from 'react-icons/hi';

const Container = styled.button`
  width: 100%;
  height: 70px;
  display: flex;
  border: none;
  background: transparent;
`;

const Image = styled.div<{ url: string }>`
  width: 70px;
  height: 70px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  border: 1px solid #eeeeee;
`;

const ImageOfMulti = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 25px;
  border: 1px solid #eeeeee;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  padding: 10px 10px 10px 15px;
  align-items: flex-start;
  flex: 1;
`;

const InfoColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.span`
  font-size: 17px;
  color: black;
  font-weight: 500;
`;

const Time = styled.span`
  font-size: 15px;
  color: #666666;
`;

const Introducing = styled.span`
  font-size: 12px;
  color: #a3a3a3;
`;

function ChatColumn({
  data,
}: {
  data: {
    img: string;
    name: string;
    lastMsg: string;
    type: 'multi' | 'single';
  };
}) {
  const onClicked = useCallback(() => {
    alert('채팅방 입장!');
  }, []);

  return (
    <Container onClick={onClicked}>
      {data.type === 'multi' ? (
        <ImageOfMulti>
          <HiUserGroup color="#666666" size={30}></HiUserGroup>
        </ImageOfMulti>
      ) : (
        <Image url={data.img}></Image>
      )}

      <Info>
        <InfoColumn>
          <Name>{data.name}</Name>
          <Time>오후 4:41</Time>
        </InfoColumn>
        <Introducing>{data.lastMsg}</Introducing>
      </Info>
    </Container>
  );
}

export default ChatColumn;
