import { useNavigate } from 'react-router-dom';
import {
  ButtonGroup,
  Column,
  ContentBlock,
  ContentText,
  GlobalStyle,
  GroupImage,
  InfoSection,
  LoginTitle,
  PlaceholderText,
  TitleText,
} from '../components/Sign/In/LoginForm.style';
import LoginFormFields from '../components/Sign/In/LoginFormFields';

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <LoginTitle>로그인</LoginTitle>
        <GroupImage src="src/assets/images/orange.svg" alt="Group Image" />
        <LoginFormFields />
        <ButtonGroup>
          <PlaceholderText style={{ color: '#f7662d' }}>
            아이디/비밀번호 찾기
          </PlaceholderText>
          <PlaceholderText style={{ color: '#f7662d' }} onClick={() => navigate('/signup')}>
            회원가입
          </PlaceholderText>
        </ButtonGroup>
        <InfoSection>
          <Column>
            <ContentBlock>
              <TitleText>요건.. 얼만교?</TitleText>
              <ContentText>
                어린 시절 추억과 삶의 정이 담겨있는 우리들의 전통시장. 전통시장
                상품들의 시세를 확인하고 저렴하게 구매하세요!
              </ContentText>
            </ContentBlock>
          </Column>
        </InfoSection>
      </div>
    </>
  );
};

export default LoginPage;
