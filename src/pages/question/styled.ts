import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 24px;
  background-color: ${color.grayscalef9};
`;

const BackButton = styled.a`
  margin-top: 45px;
`;

const TitleDiv = styled.div`
  margin-top: 50px;
  height: 90px;
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 272px;
  margin-top: 6px;
  padding: 40px 0 46px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 6px;
  margin-top: 104px;
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

export { Container, BackButton, TitleDiv, CardDiv, ProgressContainer, ProgressComplete };
