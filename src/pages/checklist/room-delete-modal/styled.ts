import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div``;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: center;
  color: ${color.grayscale29};
  span:nth-child(1) {
    font-weight: bold;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${color.grayscale29};
  margin: 1.5rem 0;
  button {
    width: 124px;
    height: 38px;
    margin: 0 0.5rem;
    padding: 13.5px 11px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 12px;
  }
`;

const CancelButton = styled.button`
  background-color: ${color.basicWhite};
  border: 1px solid ${color.grayscalec9};
`;

const ConfirmButton = styled.button`
  background-color: ${color.primaryDeepDarkBlue};
  color: ${color.basicWhite};
  border: 1px solid ${color.primaryDeepDarkBlue};
`;

export { Container, MessageWrapper, ButtonsWrapper, CancelButton, ConfirmButton };
