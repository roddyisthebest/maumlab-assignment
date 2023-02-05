import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import { HiUser } from 'react-icons/hi';
import Message from '../components/Message';
const Container = styled.div`
  height: 100vh;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 20px;
  border-bottom: 1px solid #d1d1d1;
`;

const TitleBackButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

const RoomInfoWrapper = styled.div`
  display: flex;
  gap: 0 10px;
  height: 50px;
  align-items: center;
`;

const RoomInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  box-sizing: border-box;
`;

const RoomInfoNameText = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: black;
`;

const RoomImage = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  border: 1px solid #eeeeee;
`;
const RoomInfoPeopleWrapper = styled.div`
  display: flex;
  gap: 0px 2.5px;
  justify-content: flex-end;
  align-items: center;
`;

const RoomInfoPeopleText = styled.span`
  color: #666666;
  font-size: 13px;
  font-weight: 400;
  text-align: justify;
  transform: translateY(1.5px);
`;

const BodySection = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 12.5px 20px;
  gap: 12.5px 0;
  display: flex;
  flex-direction: column;
  background-color: #b5cbd6;
`;

const BottomSection = styled.div`
  height: 50px;
  border-top: 1px solid #d1d1d1;
  padding: 20px;
  display: flex;
  gap: 0 10px;
  justify-content: space-between;
`;

const BottomInput = styled.textarea`
  flex: 1;
  color: black;
  background-color: white;
  font-weight: 400;
  border: none;
  outline: none;
  resize: none;
`;

const BottomConfirmButton = styled.button<{ isItOk: boolean }>`
  width: 50px;
  height: 100%;
  padding: 0;
  border: ${(props) =>
    props.isItOk ? '1px solid #FFE742' : '1px solid #d1d1d1'};
  border-radius: 5px;
  color: black;
  background-color: ${(props) => (props.isItOk ? '#FFE742' : '#d1d1d1')};
  font-weight: 400;
  color: ${(props) => (props.isItOk ? 'black' : '#808080')};
`;

function Room() {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, []);
  const [msgs, setmsgs] = useState<any[]>([
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 1,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: false,
    },
    {
      id: 2,
      img: '',
      name: '정근이',
      msg: '나는 오늘 피었다 지는',
      time: '오후 2:30',
      isItMe: true,
    },
    {
      id: 3,
      img: '',
      name: '정근이',
      msg: '내 주님을 더 사랑하는 것 ',
      time: '오후 2:30',
      isItMe: true,
    },
  ]);
  return (
    <Container>
      <TitleSection>
        <TitleBackButton onClick={goBack}>
          <IoMdArrowBack size={25}></IoMdArrowBack>
        </TitleBackButton>
        <RoomInfoWrapper>
          <RoomInfoTextWrapper>
            <RoomInfoNameText>배성연</RoomInfoNameText>
            <RoomInfoPeopleWrapper>
              <HiUser color="#666666" size={14}></HiUser>
              <RoomInfoPeopleText>2</RoomInfoPeopleText>
            </RoomInfoPeopleWrapper>
          </RoomInfoTextWrapper>
          <RoomImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></RoomImage>
        </RoomInfoWrapper>
      </TitleSection>
      <BodySection>
        {msgs.map((m) => (
          <Message key={m.id} data={m}></Message>
        ))}
      </BodySection>
      <BottomSection>
        <BottomInput autoFocus></BottomInput>
        <BottomConfirmButton isItOk={true}>확인</BottomConfirmButton>
      </BottomSection>
    </Container>
  );
}

export default Room;
