import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: 100vh;
  background-color: ${color.primaryYellow};
`;

const Title = styled.span`
  margin-top: 64px;
  font-size: 26px;
  font-family: SpoqaHanSans;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.3px;
`;

const Description = styled.span`
  margin: 16px 40px 0 0;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.32;
  letter-spacing: normal;
`;

const ResultContainer = styled(Container)`
  background-color: ${color.grayscalef9};
`;

const TitleWrapper = styled.div`
  padding: 24px 0 16px;
  font-size: 16px;
`;

const UserPersona = styled.h1`
  font-size: 26px;
  font-weight: bold;
  line-height: 35px;
`;

const RecommendedPlace = styled.h2`
  margin-top: 12px;
  font-size: 16px;
  font-weight: bold;
  color: ${color.grayscale29};
`;

const PersonaDescription = styled.p`
  margin-top: 12px;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.46;
`;

const Highlight = styled.span`
  background-color: ${color.secondaryYellow};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 4px;
  background-color: ${color.basicWhite};
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
`;

const StartButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
  text-align: center;
  margin-top: 24px;
`;

const GoChecklistButton = styled(Button)`
  margin-top: 16px;
  background-color: ${color.primaryYellow};
`;

const ShareButtonWrapper = styled.div`
  display: flex;
  flex-direction: rows;
  margin-top: 22px;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 142px;
  margin: auto;
`;

const ShareButton = styled.button<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ bgColor }) => `${bgColor}`};
`;

const RetestButton = styled.button`
  margin-top: 18px;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  border: none;
  background-color: transparent;
`;

const CounterDescription = styled.div`
  margin: "8px 42px 8px 42px",
  height: 32px;
  width: calc(100% - 36px);
  align-self: center;
  text-align: center;
  font-size: 12px;
  line-height: 32px;
  color: ${color.basicWhite};
  background-color: rgba(41, 41, 44, 0.8);
  border: none;
  border-radius: 17px;
  pointer-events: none;
  cursor: not-allowed;
`;

const Count = styled.span`
  color: ${color.primaryYellow};
`;

const BackButton = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
  background-color: transparent;
  border: none;
  display: flex;
  margin: 14px auto;
  object-fit: contain;
  opacity: 0.5;
  bottom: 1px;
  border-width: 0 0 1px;
  border-style: solid;
  padding-bottom:3px;
`;

const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 44rem;
`;

export {
  Container,
  ResultContainer,
  TitleWrapper,
  Title,
  UserPersona,
  RecommendedPlace,
  Description,
  PersonaDescription,
  Highlight,
  CloseButton,
  CounterDescription,
  Count,
  StartButton,
  BackButton,
  GoChecklistButton,
  ShareButtonWrapper,
  ShareButtons,
  ShareButton,
  RetestButton,
};
