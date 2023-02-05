import { useCallback } from 'react';
import styled from 'styled-components';
import { HiUserGroup } from 'react-icons/hi';
import { useRouter } from 'next/router';

const Container = styled.div<{ isItMe: boolean }>`
  width: 100%;
  display: flex;
  background: transparent;
  justify-content: ${(props) => (props.isItMe ? 'flex-end' : 'flex-start')};
`;

const Contents = styled.div`
  display: flex;
  gap: 0 7px;
`;

const Image = styled.div<{ url: string }>`
  width: 30px;
  height: 30px;
  background: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
  border: 1px solid #eeeeee;
`;

const InfoSection = styled.div`
  display: flex;
  gap: 5px 0;
  flex-direction: column;
  padding: 2px 0;
`;

const InfoName = styled.span`
  color: #666666;
  font-size: 10px;
  font-weight: 400;
`;

const InfoMsgSection = styled.div<{ isItMe: boolean }>`
  display: flex;
  gap: 0 10px;
  align-items: flex-end;
  flex-direction: ${(props) => (props.isItMe ? 'row-reverse' : 'row')};
`;

const InfoMsg = styled.div<{ isItMe: boolean }>`
  max-width: 200px;
  border-radius: 7px;
  border: 1px solid #d1d1d1;
  background-color: ${(props) => (props.isItMe ? '#FFE742' : 'white')};
  padding: 7.5px;
  box-sizing: border-box;
  color: black;
  font-size: 12.5px;
  font-weight: 400;
  word-break: break-all;
`;

const InfoMsgTime = styled.span`
  font-size: 10px;
  color: #757575;
  font-weight: 600;
`;

function Message({
  data,
}: {
  data: {
    img: string;
    name: string;
    msg: string;
    time: string;
    isItMe: boolean;
  };
}) {
  const router = useRouter();
  const onClicked = useCallback(() => {
    router.push('/room');
  }, []);

  return (
    <Container isItMe={data.isItMe}>
      {data.isItMe ? (
        <InfoMsgSection isItMe={true}>
          <InfoMsg isItMe={true}>{data.msg}</InfoMsg>
          <InfoMsgTime>오전 5:42</InfoMsgTime>
        </InfoMsgSection>
      ) : (
        <Contents>
          <Image url="https://newsimg.hankookilbo.com/cms/articlerelease/2021/08/30/97910b03-91fc-4dff-bae1-6eaf52a93fda.jpg"></Image>
          <InfoSection>
            <InfoName>조유리</InfoName>
            <InfoMsgSection isItMe={false}>
              <InfoMsg isItMe={false}>{data.msg}</InfoMsg>
              <InfoMsgTime>오전 5:42</InfoMsgTime>
            </InfoMsgSection>
          </InfoSection>
        </Contents>
      )}
    </Container>
  );
}

export default Message;
