import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../commons/button/Button';

function BookInfo() {
  const [foundBook, setFoundBook] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:9999/books').then(result => {
      setFoundBook(result.data.filter(book => Number(id) === Number(book.id)));
    });
  }, []);

  const handleAddCart = () => {
    navigate('/shoppingCart');
  };

  const handleOrder = () => {
    navigate('/order');
  };

  const bookInfo = {
    rating: '상태',
    stock: '재고',
    price: '판매가',
  };

  return (
    <Wrapper>
      {foundBook.length === 0 ? (
        <div>...Loading</div>
      ) : (
        <BookInfoWrapper>
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
        </BookInfoWrapper>
      )}
      <ButtonWrapper>
        <Button
          buttonTitle="장바구니 추가"
          borderColor="#9E8CEC"
          margin="561px 0 0 816px"
          onClick={handleAddCart}
        />
        <Button
          buttonTitle="바로 결제하기"
          margin="561px 0 0 40px"
          onClick={handleOrder}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1181px;
  margin-top: 0;
  margin: 0 auto;
`;

const BookInfoWrapper = styled.div`
  display: flex;
  position: relative;
`;

const FoundBookImg = styled.img`
  width: 326px;
  height: 462px;
  margin-top: 85px;
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
  vertical-align: middle;
  &:first-child {
    width: 178px;
    text-align: center;
    font-family: ${props =>
      props.bold ? 'NotoSansKR-Bold' : 'NotoSansKR-Regular'};
    font-size: 30px;
    line-height: ${props => (props.bold ? '41px' : '43px')};
  }
  margin-left: 28px;
  border-bottom: 1px solid #b5b5b5;
  font-size: 20px;
  line-height: 29px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
`;

export default BookInfo;
