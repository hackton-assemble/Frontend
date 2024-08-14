import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #f7662d;
  border-radius: 16px;
  border: 2px solid #ffffff;
  padding: 81px 158px;
  height: 142px;
  position: relative;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

const PriceWrapper = styled.div`
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 31px;
  top: 26px;
`;

const PriceAmount = styled.span`
  color: #ffffff;
  font-family: 'NanumSquareNeo-ExtraBold', sans-serif;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.24px;
  font-weight: 800;
`;

const PriceUnit = styled.span`
  color: #ffffff;
  font-family: 'NanumSquareNeo-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const EvaluationText = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: 'NanumSquareNeo-Regular', sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  position: absolute;
  left: 31px;
  top: 61px;
`;

const ImageContainer = styled.img`
  border-radius: 8px;
  border: 2px solid #ffffff;
  width: 88px;
  height: 80px;
  position: absolute; /* 위치는 유지하되 */
  left: 188px; /* 왼쪽으로 조정하여 카드 안으로 들어오도록 */
  top: 30px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  object-fit: cover;
`;

const StatusIndicator = styled.div`
  background: #ffffff;
  border-radius: 45px;
  width: 72px;
  height: 16px;
  position: absolute;
  left: 66px;
  top: 63px;
`;

const RatingImage = styled.img`
  width: 54.84px;
  height: 11.08px;
  position: absolute;
  left: 74.62px;
  top: 65.46px;
  overflow: visible;
`;

const ReviewCard = () => {
  return (
    <CardContainer>
      <PriceWrapper>
        <PriceAmount>10,000원</PriceAmount>
        <PriceUnit>/ 단위</PriceUnit>
      </PriceWrapper>
      <EvaluationText>평가</EvaluationText>
      <ImageContainer src="src/assets/images/orange.svg" alt="Rectangle 90" />
      <StatusIndicator />
      <RatingImage src="src/assets/images/rating.svg" alt="Group 45" />
    </CardContainer>
  );
};

export default ReviewCard;
