import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  font-family: Spoqa Han Sans;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  height: 52px;
  background-color: ${color.grayscalef9};
`;

const HeaderTitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${color.grayscale29};
`;

const BackButton = styled.button`
  position: absolute;
  margin: 0 0.5rem;
  background-color: transparent;
  padding: 0;
  border: 0;
`;

const RoomCardList = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  overflow-x: auto;
  background-color: ${color.grayscalef9};
  ::-webkit-scrollbar {
    display: none;
  }
`;

const RoomContentWrapper = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  background-color: ${color.primaryDeepDarkBlue};
`;

const RoomContent = styled.div`
  margin: 0 1.5rem;
  border-radius: 6px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px ${color.primaryDullPurple};
  background-color: ${color.basicWhite};
`;

const RoomDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1.5rem 0.5rem 1.5rem;
`;

const RoomName = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${color.grayscale29};
  padding-bottom: 0.5rem;
  border-bottom: solid 2px ${color.primaryDullPurple};
  margin-bottom: 0.5rem;
`;

const RoomDescRow = styled.div`
  font-size: 12px;
  padding-top: 0.5rem;
  border-bottom: 1px solid ${color.grayscalef9};
  span:nth-child(1) {
    display: inline-block;
    font-weight: bold;
    width: 80px;
    color: ${color.grayscalebb};
  }
  span:nth-child(2) {
    color: ${color.grayscale29};
  }
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  font-size: 14px;
  color: ${color.primaryDeepDarkBlue};
  background-color: ${color.grayscalec9};
  font-weight: bold;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const EmtpyRoomCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: dotted 2px ${color.grayscalec9};
  border-radius: 2px;
  background-color: ${color.grayscalef9};
  min-width: 56px;
  height: 56px;
  font-size: 30px;
  color: ${color.grayscalec9};
`;

export {
  Container,
  BackButton,
  Header,
  HeaderTitle,
  RoomCardList,
  RoomContentWrapper,
  RoomContent,
  RoomDetail,
  RoomName,
  RoomDescRow,
  DeleteButton,
  EmtpyRoomCard,
};
