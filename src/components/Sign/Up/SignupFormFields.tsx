import React, { useState } from 'react';
import {
  ButtonContainer,
  ButtonText,
  InputBorder,
  InputContainer,
  StyledInput,
} from '../In/LoginForm.style';

const SignupFormFields = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignup = () => {
    //추후 서버 요청 코드
    console.log('ID:', id);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Nickname:', nickname);
  };

  return (
    <>
      <InputContainer style={{ top: '295px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </InputContainer>
      <InputContainer style={{ top: '367px' }}>
        <InputBorder />
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer style={{ top: '439px' }}>
        <InputBorder />
        <StyledInput
          type="password"
          placeholder="비밀번호 재확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer style={{ top: '511px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer style={{ top: '583px' }} onClick={handleSignup}>
        <ButtonText>얼만교 가입하기</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default SignupFormFields;
