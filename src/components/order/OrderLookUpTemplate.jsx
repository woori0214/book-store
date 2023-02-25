import React from 'react';
import styled from 'styled-components';
import PageTitle from 'components/commons/pageTitle/PageTitle';
import CommonButton from 'components/commons/button/Button';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Api from 'utils/api';

function OrderLookUpTemplate({ title, orderInfo }) {
  const navigate = useNavigate();
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
      const response = await Api.delete('/orders/', {
        params: {
          orderID: obj.orderNumber
        }
      });
      console.log(response);
      console.log('취소되었습니다');
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
            {orderInfo.length > 1 ? (
              orderInfo.map((obj, index) => {
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
                        isDisabled={obj.orderStatus === ('주문 취소' || '배송 중' || '배송 완료')}
                      />
                      <CommonButton
                        buttonTitle="수정"
                        width="68px"
                        height="35px"
                        borderRadius="20px"
                        margin=" 0 0 0 14px"
                        onClick={() => handleModify(obj)}
                        isDisabled={obj.orderStatus === ('주문 취소' || '배송 중' || '배송 완료')}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="row">
                {Object.entries(orderInfo).map(([key, value]) => {
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
                    onClick={() => handleCancel(orderInfo)}
                    isDisabled={orderInfo.orderStatus === ('주문 취소' || '배송 중' || '배송 완료')}
                  />
                  <CommonButton
                    buttonTitle="수정"
                    width="68px"
                    height="35px"
                    borderRadius="20px"
                    margin=" 0 0 0 14px"
                    onClick={() => handleModify(orderInfo)}
                    isDisabled={orderInfo.orderStatus === ('주문 취소' || '배송 중' || '배송 완료')}
                  />
                </div>
              </div>
            )}
          </>
        </OrderInfoDataSection>
      </OrderInfoTable>
    </>
  );
}

const OrderInfoTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 1270px;
  min-height: auto;
  max-height: 525px;
  margin: 84px auto 0;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #d0c5fe;
  overflow-x: hidden;
  overflow-y: auto;
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
      min-width: 178px;
    }
    &:nth-child(2) {
      min-width: 315px;
    }
    &:nth-child(3) {
      min-width: 243px;
    }
    &:nth-child(4) {
      min-width: 167px;
    }
    &:nth-child(5) {
      min-width: 174px;
    }
    &:nth-child(6) {
      min-width: 190px;
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
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #d0c5fe;

      &:first-child {
        border-left: none;
        min-width: 160px;
      }
      &:nth-child(2) {
        min-width: 315px;
      }
      &:nth-child(3) {
        min-width: 243px;
      }
      &:nth-child(4) {
        min-width: 166px;
      }
      &:nth-child(5) {
        min-width: 175px;
      }
      &:nth-child(6) {
        min-width: 190px;
      }
    }
    border-bottom: 1px solid #d0c5fe;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export default OrderLookUpTemplate;
