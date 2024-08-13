import { useState } from 'react';
import {
  InputContainer,
  InputBorder,
  StyledInput,
  ButtonContainer,
  ButtonText,
} from './LoginForm.style';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from '../../../store/authStore';
import api from '../../../configs/axios';
import { useNavigate } from 'react-router-dom';

const LoginFormFields = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const setUserInfo = useSetRecoilState(userInfoState);

  const handleLogin = async () => {
    await api.post('/api/v1/user/auth/signin', {
      loginId: id,
      loginPassword: password
    }).then(res => {
      alert(`${res.data['userNickname']}님 환영합니다!`);
      setUserInfo({
        userNickname: res.data['userNickname'] as string,
        uuid: res.data['uuid'] as string
      })
      navigate('/')
    }).catch(err => {
      if (err instanceof AxiosError) {
        const status = err.response?.status;
        if (status === 404) {
          alert('로그인 정보가 일치하지 않습니다.')
        }
      } else {
        alert('일시적인 오류가 발생했습니다.')
      }
    })
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
