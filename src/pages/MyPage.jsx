import React, { useEffect, useState } from 'react';
import MyPageTemplate from 'components/myPage/MyPageTemplate';
import Api from 'utils/api';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const [userInfo, setUserInfo] = useState('');
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await Api.get('/users/mydetail');
      console.log(response.data[0]);
      setUserInfo(response.data[0]);
    };
    fetchUserInfo();
  }, []);

  const userInfoData = {
    이름: userInfo.name,
    이메일: userInfo.email,
    전화번호: userInfo.phone,
    주소: userInfo.address
  };

  const initialUserData = {
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    address: userInfo.address,
    password: userInfo.password
  };
  const handleChangePassword = () => {
    // const userData = initialUserData.filter((data) => data.key !== password);
    navigate('/changePassword', {
      state: {
        userData: initialUserData
      }
    });
  };

  const handleOrderList = () => {
    navigate('/orderLookUp');
  };

  const handleUserInfoModify = () => {
    setModal((prev) => !prev);
  };

  const handleDeleteUser = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      const response = await Api.delete('/users/mydetail');
      if (response.data.acknowledged) {
        alert('탈퇴되었습니다!');
        location.href = '/login';
      }
    }
  };

  return (
    <MyPageTemplate
      userInfoData={userInfoData}
      initialUserData={initialUserData}
      handleChangePassword={handleChangePassword}
      handleOrderList={handleOrderList}
      handleUserInfoModify={handleUserInfoModify}
      handleDeleteUser={handleDeleteUser}
      modal={modal}
      setModal={setModal}
    />
  );
}

export default MyPage;
