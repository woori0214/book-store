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
      {orderInfo.length === 0 ? (
        <EmptyOrder>주문 내역이 없습니다.</EmptyOrder>
      ) : (
        <>
          <OrderInfoTable>
            <thead>
              <OrderInfoLabelSection>
                <OrderInfoTh>주문 일자</OrderInfoTh>
                <OrderInfoTh>주문 번호</OrderInfoTh>
                <OrderInfoTh>상품 정보</OrderInfoTh>
                <OrderInfoTh>주문 총액</OrderInfoTh>
                <OrderInfoTh>주문 처리 상태</OrderInfoTh>
                <OrderInfoTh>주문 취소 / 수정</OrderInfoTh>
              </OrderInfoLabelSection>
            </thead>
            <tbody>
              <>
                {orderInfo.slice(offset, offset + limit).map((obj) => {
                  return (
                    <OrderInfoTr key={obj.orderNumber}>
                      {Object.entries(obj).map(([key, value]) => {
                        return (
                          <OrderInfoTd key={key}>
                            {key === 'orderDate' ? format(new Date(value), 'yyyy-MM-dd hh:mm:ss') : value}
                          </OrderInfoTd>
                        );
                      })}
                      <OrderInfoTd>
                        <CommonButton
                          buttonTitle="취소"
                          fontSize="0.8rem"
                          width="46px"
                          height="26px"
                          lineHeight="14px"
                          borderRadius="10px"
                          borderColor="#9E8CEC"
                          onClick={() => handleCancel(obj)}
                          isDisabled={
                            obj.orderStatus === '취소' || obj.orderStatus === '배송중' || obj.orderStatus === '배송완료'
                          }
                        />
                        <CommonButton
                          buttonTitle="수정"
                          fontSize="0.8rem"
                          width="46px"
                          height="26px"
                          lineHeight="14px"
                          borderRadius="10px"
                          margin=" 0 0 0 8px"
                          onClick={() => handleModify(obj)}
                          isDisabled={
                            obj.orderStatus === '취소' || obj.orderStatus === '배송중' || obj.orderStatus === '배송완료'
                          }
                        />
                      </OrderInfoTd>
                    </OrderInfoTr>
                  );
                })}
              </>
            </tbody>
          </OrderInfoTable>
          <Pagination totalItemCount={orderInfo.length} limit={limit} page={page} setPage={setPage} />
        </>
      )}
    </>
  );
}

const EmptyOrder = styled.div`
  height: 300px;
  font-family: 'NotoSansKR';
  font-size: 30px;
  line-height: 200px;
  text-align: center;
`;

const OrderInfoTable = styled.table`
  width: 80%;
  max-width: 800px;
  margin: 40px auto 50px;
  border: 1px solid #d0c5fe;
  overflow: hidden;
`;

const OrderInfoLabelSection = styled.tr`
  width: 100%;
  height: 50px;
  align-items: center;
  border: 1px solid #d0c5fe;
  font-family: 'NotoSansKR-Medium';
  font-size: 1rem;
  line-height: 2rem;
  &:first-child {
    background-color: #edeafc;
  }
`;

const OrderInfoTh = styled.th`
  border: 1px solid #d0c5fe;
  font-family: 'NotoSansKR-bold';
  text-align: center;
  vertical-align: middle;
  line-height: 130%;
  &:first-child {
    width: 12%;
  }
  &:nth-child(2) {
    width: 21%;
  }
  &:nth-child(3) {
    width: 17%;
  }
  &:nth-child(4) {
    width: 12%;
  }
  &:nth-child(5) {
    width: 13%;
  }
  &:nth-child(6) {
    width: 15%;
  }
`;

const OrderInfoTr = styled.tr`
  border: 1px solid #d0c5fe;
  height: 50px;
`;

const OrderInfoTd = styled.td`
  border: 1px solid #d0c5fe;
  height: 40px;
  vertical-align: middle;
  text-align: center;
  font-family: 'NotoSansKR-Medium';
  font-size: 0.8rem;
  line-height: 1rem;
`;

export default OrderLookUpTemplate;
