import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OrderButton from '../commons/CommonButton';

function BookInfo() {
  const [foundBook, setFoundBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:9999/books').then((result) => {
      setFoundBook(result.data.filter((book) => Number(id) === Number(book.id)));
    });
  }, []);

  const bookInfo = {
    rating: '상태',
    stock: '재고',
    price: '판매가'
  };

  return (
    <>
      {foundBook.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Wrapper>
          <FoundBookImg src={`/images/${foundBook[0].imageURL}`} alt="이미지" />
          <DescriptionTable>
            <DescriptionTr>
              <DescriptionTd bold>{foundBook[0].title}</DescriptionTd>
              <DescriptionTd>{`${foundBook[0].author} | ${foundBook[0].publisher}  |  ${foundBook[0].publicationDate}`}</DescriptionTd>
            </DescriptionTr>
            {Object.entries(bookInfo).map(([key, value]) => (
              <DescriptionTr>
                <DescriptionTd>{value}</DescriptionTd>
                <DescriptionTd>{foundBook[0][key]}</DescriptionTd>
              </DescriptionTr>
            ))}
          </DescriptionTable>
        </Wrapper>
      )}

      <ButtonWrapper>
        <AddCartButton type="button">장바구니 추가</AddCartButton>
        <OrderButton margin="14px 0 0 40px" />
      </ButtonWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const FoundBookImg = styled.img`
  width: 326px;
  height: 462px;
  margin: 85px 0 0 369px;
`;

const DescriptionTable = styled.table`
  box-sizing: border-box;
  width: 761px;
  height: 414px;
  border-top: 4px solid #353535;
  margin: 100px 0 0 94px;
  border-collapse: collapse;
`;

const DescriptionTr = styled.tr`
  height: 99px;
  &:first-child {
    height: 117px;
  }
`;

const DescriptionTd = styled.td`
  &:first-child {
    width: 178px;
    text-align: center;
    font-family: ${(props) => (props.bold ? 'NotoSansKR-Bold' : 'NotoSansKR-Regular')};
    font-size: 30px;
    line-height: ${(props) => (props.bold ? '41px' : '43px')};
  }
  margin-left: 28px;
  border-bottom: 1px solid #b5b5b5;
  font-size: 20px;
  line-height: 29px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const AddCartButton = styled.button`
  box-sizing: border-box;
  width: 163px;
  height: 64px;
  border: 2px solid #9e8cec;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: #ffffff;
  font-family: 'NotoSansKR-Regular';
  font-size: 20px;
  line-height: 29px;
  margin: 14px 0 0 1184px;
  cursor: pointer;
`;

export default BookInfo;