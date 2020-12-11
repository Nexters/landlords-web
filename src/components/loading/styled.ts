import styled, { keyframes } from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${color.primaryDeepDarkBlue};
`;

const LoadingText = styled.h1`
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${color.basicWhite};
`;

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
  }
`;
const Dot = styled.span`
  &:after {
    content: '.';
    animation: ${dots} 2s steps(5, end) infinite;
  }
`;

export { Container, LoadingText, Dot };
