import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/commons/button/Button';
import Api from 'utils/api';

function UserInfoChangeModal({ initialUserData, setModal }) {
  const [edited, setEdited] = useState(initialUserData);

  const handleCancel = () => {
    setModal((prev) => !prev);
  };

  const handleEditChange = (e) => {
    console.log(e.target.value);
    setEdited({
      ...edited,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    console.log('edited', edited);
    if (
      !edited.email.match(
        new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)
      )
    ) {
      alert('이메일 형식에 맞게 입력해주세요.');
    } else if (!edited.phone.match(new RegExp(/^01([0|1|6|7|8|9])*-([0-9]{3,4})*-([0-9]{4})$/))) {
      alert('전화번호를 010-0000-0000 이나 010-000-0000 형식으로 입력해주세요.');
    } else {
      const response = await Api.put('/users/mydetail', edited);
      console.log(response);
      if (response.data.acknowledged) {
        window.location.reload();
      }
    }
  };

  return (
    <ModalContainer>
      <div>
        <ModalTitle>유저 정보 수정</ModalTitle>
      </div>
      <ModalForm>
        <ModalInputContainer>
          <p>이름</p>
          <ModalInput type="text" name="name" value={edited.name} onChange={handleEditChange} />
        </ModalInputContainer>
        <ModalInputContainer>
          <p>전화번호</p>
          <ModalInput type="text" name="phone" value={edited.phone} onChange={handleEditChange} />
        </ModalInputContainer>
        <ModalInputContainer>
          <p>주소</p>
          <ModalInput type="text" name="address" value={edited.address} onChange={handleEditChange} />
        </ModalInputContainer>
        <ModalInputContainer>
          <p>이메일</p>
          <ModalInput type="text" name="email" value={edited.email} onChange={handleEditChange} />
        </ModalInputContainer>
      </ModalForm>
      <ButtonContainer>
        <Button
          onClick={handleCancel}
          buttonTitle="취소"
          width="80px"
          height="35px"
          fontSize="1.3rem"
          lineHeight="0.8rem"
          borderRadius="10px"
          borderColor="#bbb2e9"
        />
        <Button
          onClick={handleSubmitEdit}
          buttonTitle="수정"
          width="80px"
          height="35px"
          fontSize="1.3rem"
          lineHeight="0.8rem"
          borderRadius="10px"
          borderColor="#bbb2e9"
        />
      </ButtonContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-width: 900px;
  height: 500px;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
`;

const ModalTitle = styled.h3`
  margin: 10px 0 40px 0;
  font-family: 'NotoSansKR-Bold';
  font-size: 22px;

  border-bottom: 1px solid #b9b9b9;
  line-height: 64px;
  text-align: center;
`;

const ModalForm = styled.div`
  background-color: #edeafc;
  border-radius: 15px;
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalInputContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 1.1rem;
  height: 30px;
  width: 100%;
  font-size: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  > p {
    text-align: center;
    font-family: 'NotoSansKR-Bold';
    width: 15%;
  }
`;

const ModalInput = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #b9b9b9;
  font-size: 16px;
  padding-left: 15px;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.7rem;
  gap: 1.3rem;
`;

export default UserInfoChangeModal;
