import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddCartBtn from './AddCartBtn';

function DetailInfo() {
  const [foundBook, setFoundBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:9999/books').then((result) => {
      setFoundBook(result.data.filter((book) => Number(id) === Number(book.id)));
    });
  }, []);

  console.log('data', foundBook[0]);

  // if (foundBook === undefined || foundBook === null) {
  //   return <>Loading..</>;
  // }

  return (
    <>
      <Wrapper>
        <FoundBookImg src={`/images/${foundBook[0]?.imageURL}`} alt="이미지" />

        <DescriptionTable>
          <DescriptionTr>
            <DescriptionTd bold>{foundBook[0]?.title}</DescriptionTd>
            <DescriptionTd>{`${foundBook[0]?.author} | ${foundBook[0]?.publisher}  |  ${foundBook[0]?.publicationDate}`}</DescriptionTd>
          </DescriptionTr>
          <DescriptionTr>
            <DescriptionTd>상태</DescriptionTd>
            <DescriptionTd>{foundBook[0]?.rating}</DescriptionTd>
          </DescriptionTr>
          <DescriptionTr>
            <DescriptionTd>재고</DescriptionTd>
            <DescriptionTd>{foundBook[0]?.stock}</DescriptionTd>
          </DescriptionTr>
          <DescriptionTr>
            <DescriptionTd>판매가</DescriptionTd>
            <DescriptionTd>{foundBook[0]?.price}</DescriptionTd>
          </DescriptionTr>
        </DescriptionTable>
      </Wrapper>
      <AddCartBtn />
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

export default DetailInfo;
