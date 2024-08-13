import { useState } from 'react';
import {
  ButtonContainer,
  ButtonText,
  InputBorder,
  InputContainer,
  StyledInput,
} from '../In/LoginForm.style';
import api from '../../../configs/axios';
import { useNavigate } from 'react-router-dom';
import { userInfoState } from '../../../store/authStore';
import { useSetRecoilState } from 'recoil';

const SignupFormFields = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate()

  const setUserInfo = useSetRecoilState(userInfoState);

  const handleSignup = async () => {
    const formData = {
      loginId: id,
      loginPassword: password,
      userName: name,
      userNickname: nickname
    }

    await api.post('/api/v1/user/auth/signup', formData).then(res => {
      alert(`${nickname}님 환영합니다!`);
      setUserInfo({
        userNickname: nickname,
        uuid: res.data['uuid'] as string
      })
      navigate('/')
    }).catch(err => {
      alert('일시적인 오류가 발생했습니다.')
      console.error(err)
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
      <InputContainer style={{ top: '439px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputContainer>
      <InputContainer style={{ top: '511px' }}>
        <InputBorder />
        <StyledInput
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <ButtonContainer style={{ top: '583px' }} onClick={handleSignup}>
        <ButtonText>얼만교 가입하기</ButtonText>
      </ButtonContainer>
    </>
  );
};

export default SignupFormFields;
