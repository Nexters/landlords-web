import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div``;

const CategoryHeader = styled.header`
  padding: 1rem;
  height: 52px;
  background-color: ${color.grayscalef9};
  div {
    display: flex;
    align-items: center;
  }
`;

const CategoryTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin: 0 0.5rem;
  background-color: transparent;
  padding: 0;
  border: 0;
`;

const RoomCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 1rem 0 1rem 1.5rem;
  overflow-x: scroll;
  background-color: ${color.grayscalef9};
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ComparisonLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-size: 12px;
  background-color: #f0f0f0;
  padding: 0 24px;
  span {
    color: ${color.grayscalebb};
    margin: 11px 0;
  }
`;

const ComparisonButton = styled.button`
  width: 61px;
  height: 26px;
  border-radius: 2px;
  background-color: ${color.primaryDullPurple};
  font-size: 12px;
  font-weight: bold;
  color: ${color.basicWhite};
  border: 0;
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

const RoomDetailTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.34;
  color: #292929;
  padding-bottom: 0.5rem;
  border-bottom: solid 2px ${color.primaryDullPurple};
  margin-bottom: 0.5rem;
`;

const RoomDetailRow = styled.div`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.35;
  padding-top: 0.5rem;
  border-bottom: 1px solid ${color.grayscalef9};
  span:nth-child(1) {
    display: inline-block;
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

export {
  Container,
  BackButton,
  CategoryHeader,
  CategoryTitle,
  RoomCardList,
  ComparisonLayer,
  ComparisonButton,
  RoomContentWrapper,
  RoomContent,
  RoomDetail,
  RoomDetailTitle,
  RoomDetailRow,
  DeleteButton,
};
