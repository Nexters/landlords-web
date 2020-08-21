import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${color.primaryDeepDarkBlue};
`;

const LoadingText = styled.h1`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${color.basicWhite};
`;
export { Container, LoadingText };
