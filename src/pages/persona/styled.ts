import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
`;

const UserName = styled.h1`
  margin-top: 0.6rem;
  font-size: 1.7rem;
  color: #000000;
`;

const Title = styled.h1`
  margin-top: 5rem;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: normal;
`;

const Description = styled.p`
  margin-top: 0.75rem;
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.35;
`;

const PersonaDescription = styled.p`
  margin-top: 14rem;
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 1.5;
`;

const ButtonDescription = styled.p`
  margin-top: 1.6rem;
  text-align: center;
  font-size: 0.95rem;
  font-weight: normal;
`;

const Button = styled.button`
  width: 100%;
  height: 3.3rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #f7b500;
  font-size: 1.23rem;
  font-weight: 500;
`;

const StartButton = styled(Button)`
  margin-top: 1rem;
  background-color: ${color.mainYellow};
`;

const ShareButton = styled(Button)`
  margin-top: 0.5rem;
  background-color: transparent;
  color: ${color.orange};
`;

const CounterDescription = styled.p`
  margin-top: 16rem;
  text-align: center;
  font-size: 1rem;
  font-weight: normal;
`;

const BackButton = styled.button`
  height: 3.3rem;
  margin-top: 1.3rem;
  border: none;
  border-radius: 4px;
  background-color: #d8d8d8;
  font-size: 1.23rem;
  font-weight: 500;
`;

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rme;
  margin-top: 2.8rem;
`;

export {
  Container,
  Title,
  UserName,
  Description,
  PersonaDescription,
  ButtonDescription,
  CloseButton,
  CounterDescription,
  StartButton,
  BackButton,
  ShareButton,
};
