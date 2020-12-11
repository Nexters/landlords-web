import styled from 'styled-components';
import color from 'styles/color';

const SELECTED_BUTTON_STYLE = `
  background-color: ${color.primaryDullPurple};
  color: ${color.basicWhite}
`;

export const Container = styled.div`
  background-color: ${color.grayscalef9};
  width: 100vw;
  height: calc(100vh - 52px);
  padding: 16px 24px 0;
`;

export const Image = styled.div<{ src: string }>`
  background: url(${({ src }) => src}) no-repeat;
  background-size: cover;
  margin-bottom: 24px;
  width: 100%;
  height: 202px;
  background-color: ${color.basicWhite};
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
  display: flex;
  min-width: 68px;
  font-size: 12px;
  font-weight: bold;
  color: ${color.grayscalebb};
`;

export const Suffix = styled.span`
  min-width: 30px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

export const ButtonContainer = styled.div`
  width: calc(100vw - 48px);
  margin: 16px 0 24px 0;
  bottom: 24px;
`;

export const BuildingTypeButtonsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 4px;
`;

export const SelectableButton = styled.button<{ selected: boolean }>`
  height: 34px;
  font-size: 14px;
  color: ${color.grayscale29};
  border: 0;
  border-radius: 2px;
  ${({ selected }) => selected && SELECTED_BUTTON_STYLE}
`;

export const GridButtonRow = styled.div`
  display: flex;
  span {
    height: 36px;
    align-items: center;
  }
`;
