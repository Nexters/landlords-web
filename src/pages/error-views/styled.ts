import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${color.primaryDeepDarkBlue};
`;

const StatusCodeWrapper = styled.div`
  margin-top: 108px;
  grid-gap: 8px;
`;

const StatusCodeText = styled.h1`
  font-family: SpoqaHanSans;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.1;
  color: ${color.primaryYellow};
`;

const StatusCodeSubText = styled.p`
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  color: ${color.primaryYellow};
`;

const Image = styled.img<{src: string}>`
  margin-top: 88px;
  width: calc(100vw - 125px);
`;

const BottomTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  align-items: center;
`;

const BottomTitle = styled.h2`
  font-family: SpoqaHanSans;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.basicWhite};
`;

const BottomSubtitle = styled.p`
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.3;
  color: ${color.basicWhite};
`;

export {
  Container,
  StatusCodeWrapper,
  StatusCodeText,
  StatusCodeSubText,
  Image,
  BottomTextWrapper,
  BottomTitle,
  BottomSubtitle,
};
