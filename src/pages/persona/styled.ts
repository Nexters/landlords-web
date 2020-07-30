import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  height: 100vh;
  background-color: ${color.primaryYellow};
`;

const ResultContainer = styled(Container)`
  background-color: ${color.grayscalef9};
`;

const UserName = styled.h1`
  margin-top: 18px;
  font-size: 26px;
  font-weight: bold;
  line-height: 35px;
`;

const Title = styled.h1`
  margin-top: 64px;
  font-size: 26px;
  font-weight: bold;
  line-height: 34.5px;
`;

const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18.5px;
`;

const PersonaDescription = styled.p`
  margin-top: 14rem;
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 1.5;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  border-radius: 4px;
  background-color: ${color.basicWhite};
  font-size: 16px;
  font-weight: bold;
  line-height: 21.5px;
`;

const StartButton = styled(Button)`
  margin-top: 24px;
`;

const GoChecklistButton = styled(Button)`
  margin-top: 16px;
  background-color: ${color.primaryYellow};
`;

const ShareButton = styled(Button)`
  margin-top: 0.5rem;
  background-color: transparent;
`;

const CounterDescription = styled.button`
  margin: 277px 29px 0;
  height: 31px;
  text-align: center;
  font-size: 12px;
  line-height: 15.5px;
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

const BackButton = styled.a`
  margin-top: 18px;
  text-align: center;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 12px;
  font-weight: bold;
  line-height: 15.5px;
`;

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 2.8rem;
`;

export {
  Container,
  ResultContainer,
  Title,
  UserName,
  Description,
  PersonaDescription,
  CloseButton,
  CounterDescription,
  Count,
  StartButton,
  BackButton,
  GoChecklistButton,
  ShareButton,
};
