import styled from "styled-components";
import search1 from "../assets/images/search_1.png"
//import search2 from "../assets/images/search_2.png"

const Container = styled.span`
  margin-top: 94px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: flex-start;
`

const MainText = styled.span`
  margin-top: 14px;
  color: var(--body-color, #514037);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "NanumSquareNeo";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 38px; /* 118.75% */
  letter-spacing: -0.8px;
`

const SubText = styled.span`
  margin-top: 16px;
  color: var(--body-color, #514037);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "NanumSquareNeo";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px;
`

const SearchContainer = styled.div`
  width: 360px;
  height: 40px;
  border-radius: 44px;
  border: 2px solid #F7662D;
  background: #FFF;

  margin-top: 42px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; 

  & > input {
    border: none;
    width: 240px;    
    color: #F7662D;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: "NanumSquareNeo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }

  & > input::placeholder {
    color: #F7662D;
  }

  & > button {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 22px;
  }
`

const Image = styled.img`
  margin-top: 24px;
  width: 354px;
  height: auto;
`

const MainText2 = styled.span`
  margin-top: 8px;
  color: var(--body-color, #514037);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;

  /* Headline/XXS */
  font-family: "NanumSquareNeo";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px; /* 120% */
  letter-spacing: -0.24px; 
`

const SubText2 = styled.span`
  margin-top: 8px;
  color: var(--body-color, #514037);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;

  /* Body/M */
  font-family: "NanumSquareNeo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`

const NextButton = styled.button`
  margin-top: 48px;
  height: 40px;
  width: 360px;
  border-radius: 44px;
  border: 2px solid #F7662D;
  background: #F7662D;
  color: #FFF;
  font-feature-settings: 'liga' off, 'clig' off;

  /* Body/S */
  font-family: "NanumSquareNeo";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`

const Search = () => {
  return <Container>
    <MainText>
      검색어를 입력해 주세요
    </MainText>
    <SubText>
      이번 주 평균시세 확인하기!
    </SubText>
    <SearchContainer>
      <input type="text" placeholder="전통시장 검색하기" />
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43207 2.04546 6.24275 2.98759 4.61517 4.61517C2.98759 6.24275 2.04546 8.43207 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8482 21.6171 21.7738 21.71 21.68C21.8903 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9923 4.13453 9.63439C4.40463 8.27653 5.07131 7.02925 6.05028 6.05028C7.02925 5.07131 8.27653 4.40463 9.63439 4.13453C10.9923 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#F7662D" />
        </svg>
      </button>
    </SearchContainer>
    <Image src={search1} />
    <MainText2>
      요건.. 얼만교?
    </MainText2>
    <SubText2>
      어린 시절 추억과 삶의 정이 담겨있는<br />
      우리들의 전통시장. 전통시장 과일들의<br />
      시세를 확인하고 저렴하게 구매하세요!<br />
    </SubText2>
    <NextButton>
      다음으로
    </NextButton>
  </Container>
}

export default Search
