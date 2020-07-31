import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${color.grayscalef9}
`;

const RoomContainer = styled.div`
  padding: 20px 24px 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto auto;
`;

const MenuBarContainer = styled.div`
  width: 100%;
  padding: 24px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const MenuBarText = styled.span`
  flex-shrink: 0;
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  margin-right: 8px;
  color: ${color.grayscale29};
`;

const MenuBarDropdownButton = styled.button`
  margin-right: 126px;
  height: 34px;
  border-radius: 2px;
  width: 100%;
  border: solid 1px ${color.grayscale29};
  background-color: ${color.primaryDeepDarkBlue};
`;

const MenuBarDropdownButtonText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.basicWhite};
`;

const CreateBox = styled.div`
  height: calc(50vw - 32px);
  border-radius: 6px;
  border: dashed 1px ${color.grayscalec9};
`;

const RoomBox = styled.div`
  height: calc(50vw - 32px);
  border-radius: 6px;
  background-color: ${color.basicWhite};
`;

const DropdownBox = styled.div<{visible: boolean}>`
  display: ${({ visible }) => visible ? 'grid' : 'none'};
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
  background-color: ${color.basicWhite}
`;

const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 8px;
`;

const DropdownText = styled.span`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

const DropdownRadioButton = styled.div<{selected: boolean}>`
  width: 13px;
  height: 13px;
  border-radius: 7px;
  border: solid 2px ${color.grayscale29};
  background-color: ${({ selected }) => selected ? color.primaryYellow : color.basicWhite};
`;



export {
  Container,
  RoomContainer,
  MenuBarContainer,
  MenuBarText,
  MenuBarDropdownButton,
  MenuBarDropdownButtonText,
  CreateBox,
  RoomBox,
  DropdownBox,
  DropdownItem,
  DropdownText,
  DropdownRadioButton,
};
