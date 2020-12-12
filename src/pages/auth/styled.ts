import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
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

const Label = styled.span`
  width: 226px;
  height: 22px;
  margin: 79px 67px 16px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
  text-align: center;
  color: ${color.basicWhite};
`;

const Button = styled.div`
  width: 312px;
  height: 54px;
  margin: 16px 24px 0;
  padding: 16px 70px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  background-color: ${color.primaryYellow};
`;

const ButtonText = styled.span`
  font-family: Spoqa Han Sans;
  width: fit-content;
  height: 22px;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
  text-align: center;
  color: ${color.grayscale29};
`;

export { Container, Button, ButtonText, IconWrapper, Label };
