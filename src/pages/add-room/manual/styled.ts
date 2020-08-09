import styled from 'styled-components';
import color from 'styles/color';

export const Container = styled.div`
  background-color: ${color.grayscalef9};
  width: 100vw;
  height: calc(100vh - 52px);
  padding: 16px 24px 0;
`;

export const Image = styled.div`
  background-color: ${color.basicWhite};
  margin-bottom: 24px;
  width: 100%;
  height: 202px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-family: SpoqaHanSans;
  min-width: 68px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscalebb};
`;

export const Suffix = styled.span`
  font-family: SpoqaHanSans;
  min-width: 30px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

export const ButtonContainer = styled.div`
  position: fixed;
  width: calc(100vw - 48px);
  bottom: 24px;
`;
