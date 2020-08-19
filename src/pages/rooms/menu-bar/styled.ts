import styled from 'styled-components';
import color from 'styles/color';

const TRIANGLE_DIRECTION = {
  UP: `border-bottom: 6px solid ${color.basicWhite}`,
  DOWN: `border-top: 6px solid ${color.basicWhite}`,
};

const Container = styled.div`
  width: 100%;
  padding: 18px 24px 10px 24px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  flex-shrink: 0;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  margin-right: 8px;
  color: ${color.grayscale29};
`;

const DropdownButton = styled.button`
  width: 117px;
  height: 34px;
  border-radius: 2px;
  border: solid 1px ${color.grayscale29};
  background-color: ${color.primaryDeepDarkBlue};
`;

const CurrrentLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.basicWhite};
`;

const DropdownItemsWrapper = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'grid' : 'none')};
  grid-template-rows: auto auto auto;
  position: absolute;
  right: 150px;
  top: 94px;
  left: 89px;
  height: 140px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
  color: black;
  background-color: ${color.basicWhite};
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 8px;
`;

const DropdownText = styled.span`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

const DropdownRadioButton = styled.div<{ selected: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 7px;
  border: solid 2px ${color.grayscale29};
  background-color: ${({ selected }) => (selected ? color.primaryYellow : color.basicWhite)};
`;

const Triangle = styled.div<{ direction: keyof typeof TRIANGLE_DIRECTION }>`
  width: 0;
  height: 0;
  border-radius: 1px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  ${({ direction }) => TRIANGLE_DIRECTION[direction]};
  margin-left: 8px;
`;

export {
  Container,
  Title,
  DropdownButton,
  CurrrentLabel,
  DropdownItemsWrapper,
  DropdownItem,
  DropdownText,
  DropdownRadioButton,
  Triangle,
};
