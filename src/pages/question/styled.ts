import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 24px;
  background-color: ${color.grayscalef9};
`;

const Header = styled.div`
  display: flex;
  flex-directions: column;
  justify-content: center;
  align-items: center;
  height: 46px;
  padding-top: 15px;
`;

const BackButton = styled.a`
  position: absolute;
  left: 24px;
`;

const TitleWrapper = styled.div`
  margin-top: 50px;
  height: 90px;
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 380px;
  margin-top: 6px;
`;
const ProgressLength = styled.div`
  text-align: right;
  margin-top: 115px;
  font-family: Spoqa Han Sans;
  font-size: 12px;
  color: ${color.grayscalebb};
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  margin-top: 8px;
  border-radius: 2.5px;
  background-color: rgba(41, 41, 44, 0.08);
`;

const ProgressComplete = styled.div<{ barWidth: number }>`
  width: ${({ barWidth }) => `${barWidth}%`};
  height: 6px;
  z-index: 2;
  background-color: ${color.primaryYellow};
  -webkit-transition: width 0.5s ease-in-out;
  -moz-transition: width 0.5s ease-in-out;
  -o-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
`;

export {
  Container,
  Header,
  BackButton,
  TitleWrapper,
  CardsWrapper,
  ProgressLength,
  ProgressContainer,
  ProgressComplete,
};
