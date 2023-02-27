import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from 'components/commons/pageTitle/PageTitle';
import CommonButton from 'components/commons/button/Button';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Api from 'utils/api';
import Pagination from './Pagination';

function OrderLookUpTemplate({ title, orderInfo }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  console.log('orderInfo', orderInfo);

  const handleModify = async (obj) => {
    const objOrderNumber = obj.orderNumber;
    const response = await Api.get(`/orders/${objOrderNumber}`);
    const initialOrdererInfo = response.data.result[0];
    console.log(response.data.result[0]);
    navigate('/orderModify', {
      state: {
        initialOrdererInfo: initialOrdererInfo
      }
    });
  };

  const handleCancel = async (obj) => {
    if (window.confirm('주문을 취소하시겠습니까?')) {
      const response = await Api.put(
        '/orders',
        {
          status: '취소'
        },
        {
          params: {
            orderID: obj.orderNumber
          }
        }
      );
      console.log(response);
      console.log('취소되었습니다');
      window.location.reload();
    }
  };
  return (
    <>
      <PageTitle title={title} />
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
            {orderInfo.slice(offset, offset + limit).map((obj, index) => {
              return (
                <div key={index} className="row">
                  {Object.entries(obj).map(([key, value]) => {
                    return (
                      <div key={key} className="item">
                        {key === 'orderDate' ? format(new Date(value), 'yyyy-MM-dd hh:mm:ss') : value}
                      </div>
                    );
                  })}
                  <div className="item">
                    <CommonButton
                      buttonTitle="취소"
                      width="68px"
                      height="35px"
                      borderRadius="20px"
                      borderColor="#9E8CEC"
                      onClick={() => handleCancel(obj)}
                      isDisabled={
                        obj.orderStatus === '취소' || obj.orderStatus === '배송중' || obj.orderStatus === '배송완료'
                      }
                    />
                    <CommonButton
                      buttonTitle="수정"
                      width="68px"
                      height="35px"
                      borderRadius="20px"
                      margin=" 0 0 0 8px"
                      onClick={() => handleModify(obj)}
                      isDisabled={
                        obj.orderStatus === '취소' || obj.orderStatus === '배송중' || obj.orderStatus === '배송완료'
                      }
                    />
                  </div>
                </div>
              );
            })}
          </>
        </OrderInfoDataSection>
      </OrderInfoTable>
      <Pagination totalItemCount={orderInfo.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}

const OrderInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 70%;
  height: auto;
  margin: 84px auto 0;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #d0c5fe;
  overflow: hidden;
`;

const OrderInfoLabelSection = styled.div`
  display: flex;
  width: 100%;
  height: 77px;
  font-family: 'NotoSansKR-Medium';
  background-color: #edeafc;
  font-size: 23px;
  line-height: 33px;
  border-bottom: 1px solid #d0c5fe;
  box-sizing: border-box;

  .item {
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #d0c5fe;
    &:first-child {
      border-left: none;
      width: 12%;
    }
    &:nth-child(2) {
      width: 25%;
    }
    &:nth-child(3) {
      width: 22%;
    }
    &:nth-child(4) {
      width: 13%;
    }
    &:nth-child(5) {
      width: 13%;
    }
    &:nth-child(6) {
      width: 15%;
    }
  }
`;
const OrderInfoDataSection = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'NotoSansKR-Regular';
  font-size: 22px;
  line-height: 32px;
  width: 100%;
  .row {
    display: flex;
    width: 100%;
    min-height: 89px;

    .item {
      overflow: hidden;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #d0c5fe;

      &:first-child {
        border-left: none;
        width: 12%;
      }
      &:nth-child(2) {
        width: 25%;
      }
      &:nth-child(3) {
        width: 22%;
      }
      &:nth-child(4) {
        width: 13%;
      }
      &:nth-child(5) {
        width: 13%;
      }
      &:nth-child(6) {
        width: 15%;
      }
    }
    border-bottom: 1px solid #d0c5fe;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default OrderLookUpTemplate;
