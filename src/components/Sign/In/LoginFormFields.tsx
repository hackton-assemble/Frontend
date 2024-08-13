import React, { useState } from 'react';
import {
  InputContainer,
  InputBorder,
  StyledInput,
  ButtonContainer,
  ButtonText,
} from './LoginForm.style';

const LoginFormFields = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //추후 서버 요청 코드
    console.log('ID:', id);
    console.log('Password:', password);
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
      <ButtonContainer style={{ top: '439px' }} onClick={handleLogin}>
        <ButtonText>로그인</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default LoginFormFields;
