import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  width: 100%;
  height: 56px;
  display: grid;
  grid-template-columns: auto auto auto;
  position: fixed;
  bottom: 0;
  background-color: ${color.basicWhite};
`;

const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div<{selected: boolean}>`
  width: 24px;
  height: 24px;
  background-color: ${({ selected }) => selected ? color.primaryYellow : color.grayscalebb}
`;

const Text = styled.span`
  font-family: Spoqa Han Sans;
  font-size: 10px;
  font-weight: normal;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

export { Container, IconWrapper, Text, NavigationItem };
