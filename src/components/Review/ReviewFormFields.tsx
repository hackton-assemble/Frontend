import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  InputBorder,
  InputContainer,
  StyledInput,
} from '../Sign/In/LoginForm.style';

const ImageUploadContainer = styled(InputContainer)`
  height: 150px;
  background-color: #f7662d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const ImageIcon = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-top: 5px;
`;

const UploadText = styled.div`
  font-family: 'NanumSquareNeo', sans-serif;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StarLabel = styled.span`
  margin: 2px 10px;
  color: #514037;
  font-family: 'NanumSquareNeo', sans-serif;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const Star = styled.span<{ selected: boolean }>`
  margin: 2px 6px;
  margin-top: 8px;
  font-size: 30px;
  color: ${({ selected }) => (selected ? '#FFD700' : '#ccc')};
  cursor: pointer;
`;

const ReviewFormFields = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false); // 이미지 업로드 상태 추가

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImageUploaded(true); // 이미지가 업로드되면 상태를 true로 변경
    } else {
      setImageUploaded(false); // 이미지가 없으면 상태를 false로 변경
    }
  };

  // imageUploaded 값이 변경될 때마다 로그 출력
  useEffect(() => {
    console.log(imageUploaded);
  }, [imageUploaded]);

  return (
    <>
      <InputContainer style={{ top: '100px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="구매가 입력하기"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
      </InputContainer>

      <ImageUploadContainer style={{ top: '158px' }}>
        <UploadText>이미지 등록하기</UploadText>
        <ImageIcon src="src/assets/images/gradient.png" alt="Upload Icon" />

        <StyledInput
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
          }}
        />
      </ImageUploadContainer>

      <InputContainer style={{ top: '316px' }}>
        <InputBorder>
          <StarContainer>
            <StarLabel>평점:</StarLabel>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                selected={rating >= star}
                onClick={() => setRating(star)}
              >
                ★
              </Star>
            ))}
          </StarContainer>
        </InputBorder>
      </InputContainer>

      <InputContainer style={{ top: '388px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="한줄평 추가하기"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </InputContainer>

      <InputContainer style={{ top: '460px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder=""
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </InputContainer>
    </>
  );
};

export default ReviewFormFields;
