import React, { Fragment, useMemo, useState } from 'react';
import styled from 'styled-components';
import CartItem from '../components/shoppingCart/CartItem';
import CartAcount from '../components/shoppingCart/CartAccount';
import PageTitle from '../components/commons/PageTitle';

const getInitialValue = () => {
  const basketItems = localStorage.getItem('books');
  return basketItems ? JSON.parse(basketItems) : [];
};

function ShoppingCartPage() {
  // 장바구니에 추가한 책들의 데이터
  const [books, setBooks] = useState(getInitialValue());

  // 책 갯수의 변경에 따른 총 가격 계산 로직
  const totalAmount = useMemo(
    () =>
      books.reduce((sum, curr) => {
        if (curr.salePrice === curr.price) {
          return sum + curr.quantity * curr.price;
        }
        return sum + curr.quantity * curr.salePrice;
      }, 0),
    [books],
  );

  // 삭제 버튼 클릭시 로직
  const handleDelete = id => {
    const newBooks = JSON.parse(JSON.stringify(books));
    const filterBook = newBooks.filter(book => book.id !== id);

    localStorage.removeItem('books');

    if (filterBook.length !== 0) {
      localStorage.setItem('books', JSON.stringify(filterBook));
    }

    setBooks(filterBook);
  };

  // 전체 삭제 버튼 클릭시 로직
  const handleDeleteAll = () => {
    setBooks([]);
    localStorage.removeItem('books');
  };

  // 마이너스 버튼 클릭시 로직
  const handleMinus = id => {
    const findBookIndex = books.findIndex(book => book.id === id);
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks[findBookIndex].quantity -= 1;

    localStorage.removeItem('books');
    localStorage.setItem('books', JSON.stringify(newBooks));

    if (JSON.parse(localStorage.getItem('books')).length === 0) {
      localStorage.clear();
    }

    setBooks(newBooks);
  };

  // 플러스 버튼 클릭시 로직
  const handlePlus = id => {
    const findBookIndex = books.findIndex(book => book.id === id);
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks[findBookIndex].quantity += 1;

    localStorage.removeItem('books');
    localStorage.setItem('books', JSON.stringify(newBooks));

    setBooks(newBooks);
  };

  return (
    <>
      <PageTitle title="장바구니" />
      {books.length === 0 ? (
        <EmptyCart>장바구니에 물건을 추가해주세요.</EmptyCart>
      ) : (
        <CartWrapper>
          <CartContent>
            <CartHeader>
              <Button type="button" onClick={handleDeleteAll}>
                전체삭제
              </Button>
            </CartHeader>
            <CartList>
              {books.map(book => (
                <CartItem
                  key={book.id}
                  book={book}
                  onDelete={handleDelete}
                  onMinus={handleMinus}
                  onPlus={handlePlus}
                />
              ))}
            </CartList>
          </CartContent>
          <CartAcount totalAmount={totalAmount} />
        </CartWrapper>
      )}
    </>
  );
}

export default ShoppingCartPage;

const CartWrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 60px auto;
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
  margin-top: 60px;
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

  &:hover {
    color: #bdbdbd;
  }
`;
