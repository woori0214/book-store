import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/commons/pageTitle/PageTitle';
import CommonButton from '../../components/commons/button/Button';

function OrderLookUpPage() {
  const navigate = useNavigate();

  const handleModify = () => {
    navigate('/orderModify');
  };

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
  const handleCancel = () => {
    if (window.confirm('주문을 취소하시겠습니까?')) {
      console.log('취소되었습니다');
    }
  };
  return (
    <>
      <PageTitle title="주문 / 배송 조회" />
      <OrderInfoTable>
        <OrderInfoLabelSection>
          <div className="item">주문 일자</div>
          <div className="item">주문 번호</div>
          <div className="item">상품 정보</div>
          <div className="item">주문 총액</div>
          <div className="item">주문 처리 상태</div>
          <div className="item">주문 취소 / 수정</div>
        </OrderInfoLabelSection>

        {/* DB연동 후 key값 orderId로 바꿀 예정 (index 사용 x) */}

        <OrderInfoDataSection>
          <>
            {orderInfo.map((obj, index) => {
              return (
                <div key={index} className="row">
                  {Object.entries(obj).map(([key, value]) => (
                    <div key={key} className="item">
                      {value}
                    </div>
                  ))}
                  <div className="item">
                    <CommonButton
                      buttonTitle="취소"
                      width="68px"
                      height="35px"
                      borderRadius="20px"
                      borderColor="#9E8CEC"
                      onClick={() => handleCancel(obj.orderId)}
                    />
                    <CommonButton
                      buttonTitle="수정"
                      width="68px"
                      height="35px"
                      borderRadius="20px"
                      margin=" 0 0 0 14px"
                    />
                  </div>
                </div>
              );
            })}
          </>
        </OrderInfoDataSection>
      </OrderInfoTable>
    </>
  );
}

const OrderInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 1219px;
  min-height: 570px;
  margin: 84px auto 0;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #d0c5fe;
`;

const OrderInfoLabelSection = styled.div`
  display: flex;
  width: 100%;
  height: 77px;
  font-family: 'NotoSansKR-Medium';
  background-color: #edeafc;
  font-size: 23px;
  line-height: 33px;

  .item {
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;

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
  }
`;

const OrderInfoDataSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .row {
    display: flex;
    width: 100%;
    min-height: 89px;

    .item {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #d0c5fe;

      &:first-child {
        border-left: none;
        min-width: 194px;
      }
      &:nth-child(2) {
        min-width: 201px;
      }
      &:nth-child(3) {
        min-width: 243px;
      }
      &:nth-child(4) {
        min-width: 166px;
      }
      &:nth-child(5) {
        min-width: 199px;
      }
      &:nth-child(6) {
        border-right: none;
        min-width: 216px;
      }
    }

    border-bottom: 1px solid #d0c5fe;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default OrderLookUpPage;
