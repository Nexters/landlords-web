import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${color.primaryDeepDarkBlue};
`;

const LoadingText = styled.h1`
  font-size: 16px;
  color: ${color.basicWhite};
`;
export { Container, LoadingText };
