import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.25rem;
  color: #000000;
`;

const UserName = styled.h1`
  margin-top: 0.6rem;
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

const CloseButton = styled.button`
  width: 1.5rem;
  height: 1.5rme;
  margin-top: 2.8rem;
`;

const StartButton = styled.button`
  width: 100%;
  height: 3.3rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #f7b500;
  font-size: 1.23rem;
  font-weight: 500;
`;

const ShareButton = styled.button`
  height: 3.3rem;
  margin-top: 0.5rem;
  border: none;
  background-color: transparent;
  color: #fa6400;
  font-size: 1.23rem;
  font-weight: 500;
`;

export {
  Container,
  UserName,
  Description,
  PersonaDescription,
  ButtonDescription,
  CloseButton,
  StartButton,
  ShareButton,
};
