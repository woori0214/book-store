import Button from 'components/commons/button/Button';
import PageTitle from 'components/commons/pageTitle/PageTitle';
import React from 'react';
import styled from 'styled-components';
import UserInfoChangeModal from './UserInfoChangeModal';

function MyPage({
  userInfoData,
  handleChangePassword,
  handleOrderList,
  handleUserInfoModify,
  setModal,
  modal,
  initialUserData
}) {
  return (
    <>
      <PageTitle title="마이페이지" />

      <MyPageBox>
        <ImageContainer>
          <RabbitImage src="/images/eliceRabbit.png" alt="엘리스토끼 이미지" />
        </ImageContainer>
        <UserInfoContainer>
          {Object.entries(userInfoData).map(([key, value]) => (
            <UserInfo key={key}>
              <UserInfoKey>{key}</UserInfoKey>
              <UserInfoValue>{value}</UserInfoValue>
            </UserInfo>
          ))}
        </UserInfoContainer>
      </MyPageBox>
      <ButtonContainer>
        <Button
          buttonTitle="비밀번호 변경"
          width="120px"
          height="50px"
          fontSize="1rem"
          borderColor="#bbb2e9"
          borderRadius="15px"
          onClick={handleChangePassword}
        />
        <Button
          buttonTitle="주문내역 조회"
          width="120px"
          height="50px"
          fontSize="1rem"
          borderColor="#bbb2e9"
          borderRadius="15px"
          onClick={handleOrderList}
        />
        <Button
          buttonTitle="회원정보 수정"
          width="120px"
          height="50px"
          fontSize="1rem"
          borderColor="#bbb2e9"
          borderRadius="15px"
          onClick={handleUserInfoModify}
        />
      </ButtonContainer>
      {modal && (
        <ModalGrey>
          <UserInfoChangeModal initialUserData={initialUserData} setModal={setModal} />
        </ModalGrey>
      )}
    </>
  );
}

const MyPageBox = styled.div`
  display: flex;
  align-items: center;

  width: 70%;
  min-width: 400px;
  max-width: 827px;
  height: 331px;
  background-color: #edeafc;
  margin: 2rem auto 0;
  border-radius: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;
`;

const RabbitImage = styled.img`
  width: 55%;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;
const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;
const UserInfoKey = styled.p`
  font-family: 'NotoSansKR-Bold';
  width: 20%;
`;

const UserInfoValue = styled.p`
  width: 60%;
  font-family: 'NotoSansKR-Medium';
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2rem auto 0;
  gap: 3rem;
  width: 70%;
  min-width: 420px;
  justify-content: center;
`;

const ModalGrey = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export default MyPage;
