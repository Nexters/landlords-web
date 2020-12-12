import { Icon } from 'components';
import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  min-height: 100%;
`;

const RoomContainer = styled.div`
  padding: 20px 24px 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto auto;
`;

const EmptyRoomCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 56px;
  width: 148px;
  height: 148px;
  border-radius: 6px;
  border: dashed 1px ${color.grayscalec9};
  color: ${color.grayscalec9};
`;

const RoomBox = styled.div`
  height: calc(50vw - 32px);
  border-radius: 6px;
  background-color: ${color.basicWhite};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  background-color: ${color.primaryYellow};
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
`;

const LogoIcon = styled(Icon)`
  margin-left: 0.5rem;
  padding-bottom: 4px;
`;

const MypageIcon = styled(Icon)`
  right: 1.5rem;
  margin: 0 23px 0 -23rem;
`;

export {
  Container,
  RoomContainer,
  EmptyRoomCard,
  RoomBox,
  Header,
  LogoIcon,
  HeaderTitle,
  MypageIcon,
};
