import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  height: 94px;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #F7662D;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 16px;

  padding: 0 25px 16px 25px;

  & a {
    width: 24px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(50% - 16px);
  height: 42px;
  border-radius: 42px;
  background: #FFF;
  color: #F7662D;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "NanumSquareNeo";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
`

const SearchHeader = () => {
  const [searchParams] = useSearchParams();
  const market = searchParams.get('market') ?? '시장명';
  const fruit = searchParams.get('fruit') ?? '과일명';

  return <Container>
    <Link to="/">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.50001L14 3.24001C13.45 2.74805 12.7379 2.47607 12 2.47607C11.262 2.47607 10.55 2.74805 9.99997 3.24001L3.99997 8.50001C3.68234 8.78408 3.42887 9.13256 3.25644 9.52225C3.08402 9.91194 2.99659 10.3339 2.99997 10.76V19.5C2.99997 20.2957 3.31604 21.0587 3.87865 21.6213C4.44126 22.1839 5.20432 22.5 5.99997 22.5H18C18.7956 22.5 19.5587 22.1839 20.1213 21.6213C20.6839 21.0587 21 20.2957 21 19.5V10.75C21.0019 10.3256 20.9138 9.90555 20.7414 9.51769C20.5691 9.12983 20.3163 8.78296 20 8.50001ZM14 20.5H9.99997V15.5C9.99997 15.2348 10.1053 14.9804 10.2929 14.7929C10.4804 14.6054 10.7348 14.5 11 14.5H13C13.2652 14.5 13.5195 14.6054 13.7071 14.7929C13.8946 14.9804 14 15.2348 14 15.5V20.5ZM19 19.5C19 19.7652 18.8946 20.0196 18.7071 20.2071C18.5195 20.3946 18.2652 20.5 18 20.5H16V15.5C16 14.7044 15.6839 13.9413 15.1213 13.3787C14.5587 12.8161 13.7956 12.5 13 12.5H11C10.2043 12.5 9.44126 12.8161 8.87865 13.3787C8.31604 13.9413 7.99997 14.7044 7.99997 15.5V20.5H5.99997C5.73476 20.5 5.4804 20.3946 5.29287 20.2071C5.10533 20.0196 4.99997 19.7652 4.99997 19.5V10.75C5.00015 10.608 5.03057 10.4677 5.08919 10.3384C5.14781 10.2091 5.2333 10.0937 5.33997 10L11.34 4.75001C11.5225 4.58969 11.7571 4.50127 12 4.50127C12.2429 4.50127 12.4775 4.58969 12.66 4.75001L18.66 10C18.7666 10.0937 18.8521 10.2091 18.9108 10.3384C18.9694 10.4677 18.9998 10.608 19 10.75V19.5Z" fill="white" />
      </svg>
    </Link>
    <Search>
      {market}
    </Search>
    <Search>
      {fruit}
    </Search>
  </Container>
}

export default SearchHeader;
