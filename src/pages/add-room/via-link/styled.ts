import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 24px;
  background: ${color.grayscalef9};
`;

const InputContainer = styled.div`
  height: calc(100vh - 192px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputGuideText = styled.p`
  margin: 0 0 16px;
  font-family: Spoqa Han Sans;
  font-size: 12px;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export { Container, InputContainer, ButtonContainer, InputGuideText };
