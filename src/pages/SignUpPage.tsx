import {
  GlobalStyle,
  GroupImage,
  LoginTitle,
} from '../components/Sign/In/LoginForm.style';
import MainHeader from '../components/Layout/Header/MainHeader';
//import LoginFormFields from '../components/Sign/In/LoginFormFields';
import SignupFormFields from '../components/Sign/Up/SignupFormFields';

const SignUpPage = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <LoginTitle>회원가입</LoginTitle>
        <MainHeader />
        <GroupImage src="src/assets/images/orange.svg" alt="Group Image" />
        <SignupFormFields />
      </div>
    </>
  );
};

export default SignUpPage;
