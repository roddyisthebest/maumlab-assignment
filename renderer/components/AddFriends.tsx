import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 450px;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  background-color: white;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TitleText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

const BodySection = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: 12.5px 20px;
  gap: 12.5px 0;
  display: flex;
  flex-direction: column;
`;

const BottomSection = styled.div`
  height: 50px;
  border-top: 1px solid #d1d1d1;
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FriendColumn = styled.button`
  display: flex;
  gap: 0 10px;
  align-items: center;
  width: 100%;
  border: none;
  background-color: white;
  padding: 0;
`;

const FriendImage = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  border: 1px solid #eeeeee;
`;

const FreindText = styled.span`
  color: black;
  font-size: 17px;
  font-weight: 400;
  flex: 1;
  text-align: left;
`;

const FriendButton = styled.div<{ isClicked: boolean }>`
  border-radius: 20px;
  width: 20px;
  height: 20px;
  border: ${(props) =>
    props.isClicked ? '1px solid #FFE742' : '1px solid #eeeeee'};
  background-color: ${(props) => (props.isClicked ? '#FFE742' : 'white')};
`;

const BottomCancleButton = styled.button`
  width: 48%;
  height: 70%;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: black;
  background-color: white;
  font-weight: 400;
`;

const BottomConfirmButton = styled.button<{ isItOk: boolean }>`
  width: 48%;
  height: 70%;
  border: ${(props) =>
    props.isItOk ? '1px solid #FFE742' : '1px solid #d1d1d1'};
  border-radius: 5px;
  color: black;
  background-color: ${(props) => (props.isItOk ? '#FFE742' : '#d1d1d1')};
  font-weight: 400;
  color: ${(props) => (props.isItOk ? 'black' : '#808080')};
`;

function AddFriends({ setVisibility }: { setVisibility: Function }) {
  return (
    <Container>
      <TitleSection>
        <TitleText>대화상태 선택</TitleText>
      </TitleSection>
      <BodySection>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
        <FriendColumn>
          <FriendImage url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></FriendImage>
          <FreindText>sdasd</FreindText>
          <FriendButton isClicked={false}></FriendButton>
        </FriendColumn>
      </BodySection>
      <BottomSection>
        <BottomCancleButton onClick={() => setVisibility(false)}>
          취소
        </BottomCancleButton>
        <BottomConfirmButton isItOk={true}>확인</BottomConfirmButton>
      </BottomSection>
    </Container>
  );
}

export default AddFriends;
