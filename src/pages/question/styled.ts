import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
`;

const BackButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 2.8rem;
`;

const Title = styled.h1`
  margin-top: 0.5rem;
  font-size: 1.7rem;
  font-weight: bold;
`;

const QuestionID = styled.h2`
  margin-top: 3rem;
  font-size: 1.7rem;
  font-weight: bold;
`;

const CardDiv = styled.div`
  margin: 2.5rem 0 3.8rem;
`;

const ProgressDiv = styled.div`
  height: 3px;
  margin-top: 12px;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

export { Container, BackButton, Title, QuestionID, CardDiv, ProgressDiv };
