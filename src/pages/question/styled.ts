import styled from 'styled-components';

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

const ProgressDiv = styled.div`
  height: 3px;
  margin-top: 12px;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

export { Container, BackButton, Title, QuestionID, CardDiv, ProgressDiv };
