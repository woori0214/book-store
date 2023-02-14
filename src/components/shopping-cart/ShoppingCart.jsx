import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

// localstorage 저장
const data = [
  {
    id: 1,
    bookImage: 'images/book.jpg',
    title: '부의 추월차선',
    quantity: 1,
    inventory: 100,
    price: 5500
  },
  {
    id: 2,
    bookImage: 'images/book.jpg',
    title: '부의 추월차선',
    quantity: 1,
    inventory: 100,
    price: 5500
  },
  {
    id: 3,
    bookImage: 'images/book.jpg',
    title: '부의 추월차선',
    quantity: 1,
    inventory: 100,
    price: 5500
  },
  {
    id: 4,
    bookImage: 'images/book.jpg',
    title: '부의 추월차선',
    quantity: 1,
    inventory: 100,
    price: 5500
  }
];
localStorage.setItem('test-1', JSON.stringify(data));

function ShoppingCart() {
  const [books, setBooks] = useState([]);

  // 장바구니 클릭할 시 로컬 스토리지에 있는 데이터들을 한번 state에 저장
  useEffect(() => {
    const booksData = JSON.parse(localStorage.getItem('test-1'));
    setBooks(booksData);
  }, []);

  const handleDelete = (id) => {
    const filterBook = books.filter((book) => book.id !== id);
    localStorage.clear();
    localStorage.setItem('test-1', JSON.stringify(filterBook));
    setBooks(filterBook);
  };

  if (!localStorage.getItem('test-1')) {
    return <div>아무 데이터도 없습니다.</div>;
  }

  return (
    <>
      <CartTitle>장바구니</CartTitle>
      <CartWrapper>
        <CartContent>
          <CartHeader>
            <CheckBox>
              <input type="checkbox" id="checkAll" />
              <label htmlFor="checkAll">전체선택</label>
            </CheckBox>
            <button type="button">선택삭제</button>
          </CartHeader>
          <CartList>
            {books.map((book) => (
              <CartItem key={book.id} book={book} handleDelete={handleDelete} />
            ))}
          </CartList>
        </CartContent>
        <PaymentArea>
          <PaymentResult>
            <Amount>
              <AmountItem>
                <Span>총 상품금액</Span>
                <SpanPrice>9000원</SpanPrice>
              </AmountItem>
              <AmountDelivery>
                <Span>배송비</Span>
                <SpanPrice>3000원</SpanPrice>
              </AmountDelivery>
            </Amount>
            <Total>
              <PurpleSpan>결제예상금액</PurpleSpan>
              <PurpleSpan>12000원</PurpleSpan>
            </Total>
          </PaymentResult>
        </PaymentArea>
      </CartWrapper>
    </>
  );
}

export default ShoppingCart;

const CartTitle = styled.h2`
  height: 200px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 200px;
  text-align: center;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CartWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

const CartContent = styled.div`
  flex-basis: 70%;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const CartList = styled.div`
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`;

const CheckBox = styled.div``;

const PaymentArea = styled.div`
  flex-basis: 30%;
  padding-top: 44.4px;
`;

const PaymentResult = styled.div``;

const Amount = styled.div`
  padding: 25px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

const Span = styled.span`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #bdbdbd;
`;

const SpanPrice = styled(Span)`
  color: #000000;
`;

const PurpleSpan = styled(Span)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #6e54e2;
`;

const AmountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AmountDelivery = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;
