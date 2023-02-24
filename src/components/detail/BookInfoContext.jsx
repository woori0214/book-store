import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function BookInfoContext() {
  const [foundBook, setFoundBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        'http://elice.iptime.org:8080/book/read'
      );
      console.log(response);
      const filteredBook = response.data.filter(book => id === book._id);
      setFoundBook(filteredBook);
    };
    fetchBooks();
  }, []);

  return (
    <BookInfoWrapper>
      <FoundBookImg src={foundBook?.[0]?.imageUrl} alt="이미지" />
      <DescriptionTable>
        <DescriptionTbody>
          <tr>
            <DescriptionTd bold>{foundBook?.[0]?.title}</DescriptionTd>
            <DescriptionTd>{`${foundBook?.[0]?.author} | ${foundBook?.[0]?.publisher}  |  ${foundBook?.[0]?.publishedDate}`}</DescriptionTd>
          </tr>

          {/* {Object.entries(bookInfo).map(([key, value, index]) => (
          <DescriptionTbody key={index}>
            <tr key={index}>
              <DescriptionTd key={key}>{value}</DescriptionTd>
              <DescriptionTd key={value}>{foundBook?.[0]?.[key]}</DescriptionTd>
            </tr>
          </DescriptionTbody>
        ))} */}

          <tr>
            <DescriptionTd>상태</DescriptionTd>
            <DescriptionTd>{foundBook?.[0]?.condition}</DescriptionTd>
          </tr>
          <tr>
            <DescriptionTd>재고</DescriptionTd>
            <DescriptionTd>{`${foundBook?.[0]?.quantity} 부`}</DescriptionTd>
          </tr>
          <tr>
            <DescriptionTd>판매가</DescriptionTd>
            <DescriptionTd>{`${foundBook?.[0]?.price} 원`}</DescriptionTd>
          </tr>
        </DescriptionTbody>
      </DescriptionTable>
    </BookInfoWrapper>
  );
}

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

const DescriptionTbody = styled.tbody`
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

export default BookInfoContext;

// _id: 63f215b543f49c54529a68db
// _id: 63f21764bce010f1e5053c89
