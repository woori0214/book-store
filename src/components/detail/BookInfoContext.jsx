import React, { Suspense, useState, useEffect } from 'react';
import Api from 'utils/api';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/commons/button/Button';
import { useNavigate } from 'react-router-dom';

function BookInfoContext({ resource }) {
  const navigate = useNavigate();
  console.log(resource.book.read());
  const foundBook = resource.book.read();
  // const [foundBook, setFoundBook] = useState();
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const response = await Api.get(`/books`, {
  //       params: {
  //         bookID: id
  //       }
  //     }).then((response) => response.data);
  //     setFoundBook({ ...response, quantity: 1 });
  //   };
  //   fetchBooks();
  // }, []);

  const handleAddCart = () => {
    let booksList = JSON.parse(localStorage.getItem('books'));
    if (booksList) {
      const includeBook = booksList.filter((book) => book._id === id);
      if (includeBook.length !== 0) {
        alert('동일한 제품이 장바구니에 있습니다.');
        return;
      }
      booksList.push(foundBook);
    } else {
      booksList = [foundBook];
    }
    localStorage.setItem('books', JSON.stringify(booksList));
    setCartItem((prev) => prev + 1);
    alert('장바구니에 추가 되었습니다.');
  };

  const handleOrder = () => {
    navigate('/order');
  };

  return (
    <>
      <BookInfoWrapper>
        <BookInfoContainer>
          <FoundBookImg src={foundBook.imageUrl} alt="이미지" />
          <DescriptionTable>
            <DescriptionTbody>
              <tr>
                <DescriptionTd bold>{foundBook.title}</DescriptionTd>
                <DescriptionTd>{`${foundBook.author} | ${foundBook.publisher}  |  ${foundBook.publishedDate}`}</DescriptionTd>
              </tr>

              <tr>
                <DescriptionTd>상태</DescriptionTd>
                <DescriptionTd>{foundBook.condition}</DescriptionTd>
              </tr>
              <tr>
                <DescriptionTd>재고</DescriptionTd>
                <DescriptionTd>{`${foundBook.stock} 부`}</DescriptionTd>
              </tr>
              <tr>
                <DescriptionTd>판매가</DescriptionTd>
                <DescriptionTd>{`${foundBook.price} 원`}</DescriptionTd>
              </tr>
            </DescriptionTbody>
          </DescriptionTable>
        </BookInfoContainer>
      </BookInfoWrapper>
      <ButtonWrapper>
        <Button buttonTitle="장바구니 추가" borderColor="#9E8CEC" onClick={handleAddCart} fontSize="18px" />
        <Button buttonTitle="바로 결제하기" onClick={handleOrder} fontSize="18px" />
      </ButtonWrapper>
    </>
  );
}

const BookInfoWrapper = styled.div`
  /* display: flex; */
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

const BookInfoContainer = styled.div`
  position: relative;
  display: flex;
`;

const FoundBookImg = styled.img`
  width: 30%;
  height: 435px;
  margin-top: 5.6rem;
`;

const DescriptionTable = styled.table`
  box-sizing: border-box;
  width: 70%;
  height: 414px;
  border-top: 4px solid #353535;
  margin: 5.9rem 0 0 4rem;
  border-collapse: collapse;
`;

const DescriptionTbody = styled.tbody`
  height: 99px;
  &:first-child {
    height: 117px;
  }
`;

const DescriptionTd = styled.td`
  vertical-align: middle;
  &:first-child {
    width: 40%;
    text-align: center;
    font-family: ${(props) => (props.bold ? 'NotoSansKR-Bold' : 'NotoSansKR-Regular')};
    font-size: 25px;
    line-height: ${(props) => (props.bold ? '41px' : '43px')};
  }
  margin-left: 28px;
  border-bottom: 1px solid #b5b5b5;
  font-size: 20px;
  line-height: 29px;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: end;
  position: relative;
`;

export default BookInfoContext;

// _id: 63f215b543f49c54529a68db
// _id: 63f21764bce010f1e5053c89
