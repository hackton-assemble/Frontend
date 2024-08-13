import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  .container {
    background: #ffffff;
    position: relative;
    height: fit-content;
  }
`;

const InputContainer = styled.div`
  width: 362px;
  height: 48px;
  position: absolute;
  left: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBorder = styled.div`
  border-radius: 16px;
  border: 2px solid #f7662d;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 16px;
  border-radius: 16px;
  font-family: 'NanumSquareNeo';
  font-size: 16px;
  color: #514037;
  background: transparent;
  z-index: 1;

  ::placeholder {
    color: #514037;
    text-align: center;
  }
`;

const PlaceholderText = styled.div`
  color: #514037;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.24px;
  position: relative;
`;

const ButtonContainer = styled(InputContainer)`
  background: #f7662d;
  border-radius: 16px;
  cursor: pointer;
`;

const ButtonText = styled(PlaceholderText)`
  color: #ffffff;
  position: relative;
`;

const ContentText = styled.div`
  color: #514037;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.24px;
  position: relative;
  align-self: stretch;
`;

const LoginTitle = styled.div`
  color: #271c11;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: -0.8px;
  position: absolute;
  left: calc(50% - 45px);
  top: 144px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 324px;
  position: absolute;
  left: calc(50% - 162px);
  top: 499px;
`;

const InfoSection = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  width: 430px;
  position: absolute;
  left: calc(50% - 215px);
  top: 615px;
`;

const Column = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
`;

const GroupImage = styled.img`
  width: 7.67%;
  height: 4.98%;
  position: absolute;
  right: 46.28%;
  left: 46.05%;
  bottom: 72.38%;
  top: 22.64%;
  overflow: visible;
`;

const TitleText = styled.div`
  color: #271c11;
  text-align: center;
  font-family: 'NanumSquareNeo';
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.24px;
  position: relative;
  align-self: stretch;
`;

export {
  GlobalStyle,
  InputContainer,
  InputBorder,
  StyledInput,
  ButtonGroup,
  InfoSection,
  Column,
  ContentBlock,
  PlaceholderText,
  ButtonContainer,
  ButtonText,
  LoginTitle,
  ContentText,
  GroupImage,
  TitleText,
};
