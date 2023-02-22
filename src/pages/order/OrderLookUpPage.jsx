import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/commons/pageTitle/PageTitle';
import CommonButton from '../../components/commons/button/Button';

const orderInfo = [
  {
    orderDate: '2023-02-14',
    orderNumber: '11111111',
    orderItem: '탈무드 외 1개 상품',
    orderPrice: '15,300원',
    orderStatus: '배송 준비중',
  },
  {
    orderDate: '2023-02-14',
    orderNumber: '22222222',
    orderItem: '탈무드 외 1개 상품',
    orderPrice: '15,300원',
    orderStatus: '배송 준비중',
  },
  {
    orderDate: '2023-02-14',
    orderNumber: '33333333',
    orderItem: '탈무드 외 1개 상품',
    orderPrice: '15,300원',
    orderStatus: '배송 준비중',
  },
  {
    orderDate: '2023-02-14',
    orderNumber: '44444444',
    orderItem: '탈무드 외 1개 상품',
    orderPrice: '15,300원',
    orderStatus: '배송 준비중',
  },
  {
    orderDate: '2023-02-14',
    orderNumber: '55555555',
    orderItem: '탈무드 외 1개 상품',
    orderPrice: '15,300원',
    orderStatus: '배송 준비중',
  },
];

function OrderLookUpPage() {
  const navigate = useNavigate();

  const handleModify = () => {
    navigate('/orderModify');
  };

  const handleCancel = obj => {
    if (window.confirm('주문을 취소하시겠습니까?')) {
      console.log('취소되었습니다');
    }
    console.log(orderInfo.orderNumber);
  };

  return (
    <>
      <PageTitle title="주문 / 배송 조회" />
      <OrderInfoTable>
        <thead>
          <OrderInfoTr>
            <OrderInfoTh>주문 일자</OrderInfoTh>
            <OrderInfoTh>주문 번호</OrderInfoTh>
            <OrderInfoTh>상품 정보</OrderInfoTh>
            <OrderInfoTh>주문 총액</OrderInfoTh>
            <OrderInfoTh>주문 처리 상태</OrderInfoTh>
            <OrderInfoTh>주문 취소 / 수정</OrderInfoTh>
          </OrderInfoTr>
        </thead>
        {/* DB연동 후 key값 orderId로 바꿀 예정 (index 사용 x) */}
        <tbody>
          {orderInfo.map((obj, index) => (
            <OrderInfoTr key={index}>
              {Object.entries(obj).map(([key, value]) => (
                <OrderInfoTd key={key}>{value}</OrderInfoTd>
              ))}
              <OrderInfoTd>
                <CommonButton
                  buttonTitle="취소"
                  width="68px"
                  height="35px"
                  borderRadius="20px"
                  borderColor="#9E8CEC"
                  onClick={() => handleCancel(obj)}
                />
                <CommonButton
                  buttonTitle="수정"
                  width="68px"
                  height="35px"
                  borderRadius="20px"
                  margin=" 0 0 0 14px"
                  onClick={handleModify}
                />
              </OrderInfoTd>
            </OrderInfoTr>
          ))}
        </tbody>
      </OrderInfoTable>
    </>
  );
}

const OrderInfoTable = styled.table`
  width: 1219px;
  height: 570px;
  margin-top: 84px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #d0c5fe;
`;

const OrderInfoTh = styled.th`
  vertical-align: middle;
  font-family: 'NotoSansKR-Medium';
  height: 77px;
  background-color: #edeafc;
  font-size: 23px;
  line-height: 33px;
  text-align: center;
  border: 1px solid #d0c5fe;
`;

const OrderInfoTr = styled.tr`
  height: 89px;
`;

const OrderInfoTd = styled.td`
  vertical-align: middle;
  border: 1px solid #d0c5fe;
  font-family: 'NotoSansKR-Regular';
  font-size: 25px;
  line-height: 36px;
  text-align: center;
  &:first-child {
    width: 194px;
  }
  &:nth-child(2) {
    width: 201px;
  }
  &:nth-child(3) {
    width: 243px;
  }
  &:nth-child(4) {
    width: 166px;
  }
  &:nth-child(5) {
    width: 199px;
  }
`;

export default OrderLookUpPage;
