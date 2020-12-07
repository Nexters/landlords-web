import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.primaryDeepDarkBlue};
`;

const IconWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 249px;
  width: 100%;
  padding: 0 140px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  padding: 0 24px;
  bottom: 74px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 54px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  background-color: ${color.kakaoYellow};
`;

const ButtonText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.3;
  text-align: center;
  color: ${color.grayscale29};
`;

export { Container, Button, ButtonText, ButtonWrapper, IconWrapper };
