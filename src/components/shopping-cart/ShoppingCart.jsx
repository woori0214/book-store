import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import CartAcount from './CartAcount';

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
  const [amount, setAmount] = useState(0);

  // 각 책의 quantity와 price를 모두 더하는 함수
  const calculateAmount = (inputAry) => {
    const result = inputAry.reduce((sum, curr) => sum + curr.quantity * curr.price, 0);
    return result;
  };

  // 장바구니 클릭할 시 최초 한번 로컬 스토리지에 있는 데이터들을 한번 state에 저장
  useEffect(() => {
    const booksData = JSON.parse(localStorage.getItem('test-1'));
    setAmount(calculateAmount(booksData));
    setBooks(booksData);
  }, []);

  // 삭제 버튼 클릭시 로직
  const handleDelete = (id) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    const filterBook = newBooks.filter((book) => book.id !== id);

    localStorage.clear();
    localStorage.setItem('test-1', JSON.stringify(filterBook));

    setAmount(calculateAmount(filterBook));
    setBooks(filterBook);
  };

  // 마이너스 버튼 클릭시 로직
  const handleMinus = (id) => {
    const findBookIndex = books.findIndex((book) => book.id === id);
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks[findBookIndex].quantity -= 1;

    localStorage.clear();
    localStorage.setItem('test-1', JSON.stringify(newBooks));

    setAmount(calculateAmount(newBooks));
    setBooks(newBooks);
  };

  // 플러스 버튼 클릭시 로직
  const handlePlus = (id) => {
    const findBookIndex = books.findIndex((book) => book.id === id);
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks[findBookIndex].quantity += 1;

    localStorage.clear();
    localStorage.setItem('test-1', JSON.stringify(newBooks));

    setAmount(calculateAmount(newBooks));
    setBooks(newBooks);
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
              <CartItem key={book.id} book={book} handleDelete={handleDelete} handleMinus={handleMinus} handlePlus={handlePlus} />
            ))}
          </CartList>
        </CartContent>
        <CartAcount amount={amount} />
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
