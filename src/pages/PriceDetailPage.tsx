import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CustomCard from '../components/Card/CustomCard';
import ReviewCard from '../components/Card/ReviewCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: fit-content;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin: 0;
`;

const TitleTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TitleText = styled.p`
  margin: 0;
  color: #333;
  font-size: 16px;
  margin-left: 10px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 230px;
  width: 100%;
`;

const Spacer = styled.div`
  height: 20px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleImage = styled.img`
  width: 20px;
  height: 20px;
`;

const InfiniteScroll = () => {
  const [reviews, setReviews] = useState<number[]>([]);

  // 더미 데이터 추가 (초기 데이터 로드)
  useEffect(() => {
    const initialReviews = Array.from({ length: 5 }, (_, index) => index + 1);
    setReviews(initialReviews);
  }, []);

  return (
    <Container>
      <CustomCard width="408px" height="330px" bgColor="#FFF" shadow={false}>
        <CardContent>
          <CardTitle>이번 주 평균시세</CardTitle>
          <TitleTextWrapper>
            <TitleImage src="src/assets/images/orange.svg" alt="Title Icon" />
            <TitleText>570원/개</TitleText>
          </TitleTextWrapper>
        </CardContent>
      </CustomCard>
      <Spacer />
      <CustomCard
        width="408px"
        height="fit-content"
        bgColor="#FFF"
        shadow={false}
      >
        <CardContent>
          <TitleTextWrapper>
            <TitleImage src="src/assets/images/orange.svg" alt="Review Icon" />
            <TitleText>최근 리뷰</TitleText>
          </TitleTextWrapper>
          <ReviewList>
            {reviews.map((_, index) => (
              <ReviewCard key={index} />
            ))}
          </ReviewList>
        </CardContent>
      </CustomCard>
    </Container>
  );
};

export default InfiniteScroll;
