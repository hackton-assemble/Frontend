import React from 'react';
import styled from 'styled-components';
import { InputContainer, StyledInput } from '../Sign/In/LoginForm.style';

const ImageUploadContainer = styled(InputContainer)`
  height: 300px;
  background-color: #f7662d;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(253, 192, 125, 1) 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const ImageIcon = styled.img`
  max-width: 180px;
  max-height: 180px;
  margin-top: 20px;
`;

const UploadText = styled.div`
  font-family: 'NanumSquareNeo-ExtraBold', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 30px;
`;

const AdditionalText = styled.div`
  font-family: 'NanumSquareNeo-Regular', sans-serif;
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const ReceiptForm = ({
  setImageUploaded
}: {
  setImageUploaded: React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImageUploaded(true);
    } else {
      setImageUploaded(false);
    }
  };

  return (
    <ImageUploadContainer style={{ top: '158px' }}>
      <UploadText>"영수증 인증하고 리뷰 작성하기"</UploadText>
      <ImageIcon src="src/assets/images/receipt.png" alt="Upload Icon" />
      <AdditionalText>이미지를 업로드해주세요.</AdditionalText>
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
  );
};

export default ReceiptForm;
