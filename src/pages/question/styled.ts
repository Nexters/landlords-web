import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const BackButton = styled.button`
  width: 24px;
  height: 24px;
  margin-top: 45px;
`;

const Title = styled.h1`
  margin-top: 8px;
  font-size: 27px;
  font-weight: bold;
`;

const QuestionID = styled.h2`
  margin-top: 48px;
  font-size: 27px;
  font-weight: bold;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px 12px;
  margin: 40px 0 60px;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  margin-top: 12px;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const ProgressComplete = styled.div<{ barWidth: number }>`
  width: ${({ barWidth }) => `${barWidth}%`};
  height: 4px;
  z-index: 2;
  background-color: ${color.mainYellow};
  -webkit-transition: width 0.5s ease-in-out;
  -moz-transition: width 0.5s ease-in-out;
  -o-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
`;

export { Container, BackButton, Title, QuestionID, CardDiv, ProgressContainer, ProgressComplete };
