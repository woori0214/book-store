import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/shoppingCart/CartItem';
import CartAcount from '../components/shoppingCart/CartAcount';

function ShoppingCart() {
  // 장바구니에 추가한 책들의 데이터
  const [books, setBooks] = useState([]);

  // 장바구니에 추가한 책들의 총 가격 데이터
  const [amount, setAmount] = useState(0);

  // 각 책의 quantity와 price를 모두 더하는 함수
  const calculateAmount = (books) => {
    const result = books.reduce((sum, curr) => sum + curr.quantity * curr.price, 0);
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

    if (filterBook.length !== 0) {
      localStorage.setItem('test-1', JSON.stringify(filterBook));
    }

    setAmount(calculateAmount(filterBook));
    setBooks(filterBook);
  };

  // 전체 삭제 버튼 클릭시 로직
  const handleDeleteAll = () => {
    setAmount(0);
    setBooks([]);
    localStorage.clear();
  };

  // 마이너스 버튼 클릭시 로직
  const handleMinus = (id) => {
    const findBookIndex = books.findIndex((book) => book.id === id);
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks[findBookIndex].quantity -= 1;

    localStorage.clear();
    localStorage.setItem('test-1', JSON.stringify(newBooks));

    if (JSON.parse(localStorage.getItem('test-1')).length === 0) {
      localStorage.clear();
    }

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

  // 장바구니에 아무것도 포함하지 않았을 경우 랜더링 화면
  if (!localStorage.getItem('test-1') || JSON.parse(localStorage.getItem('test-1')).length === 0) {
    return (
      <>
        <CartTitle>장바구니</CartTitle>
        <EmptyCart>장바구니에 물건을 추가해주세요.</EmptyCart>
      </>
    );
  }

  return (
    <>
      <CartTitle>장바구니</CartTitle>
      <CartWrapper>
        <CartContent>
          <CartHeader>
            <Button type="button" onClick={handleDeleteAll}>
              전체삭제
            </Button>
          </CartHeader>
          <CartList>
            {books.map((book) => (
              <CartItem key={book.id} book={book} onDelete={handleDelete} onMinus={handleMinus} onPlus={handlePlus} />
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
  width: 60%;
  margin: auto;
`;

const CartContent = styled.div`
  flex-basis: 70%;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const CartList = styled.div`
  border-top: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
`;

const EmptyCart = styled.div`
  height: 300px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 200px;
  text-align: center;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  border: none;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;

  background-color: white;

  &: hover {
    color: #bdbdbd;
  }
`;
