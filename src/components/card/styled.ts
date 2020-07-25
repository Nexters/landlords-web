import styled from 'styled-components';
import color from 'styles/color';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  height: 12rem;
  border: none;
  border-radius: 4px;
  background-color: ${color.cardGray};
`;
const CardContent = styled.p`
  font-size: 1.2rem;
  color: #ffffff;
`;

export { CardWrapper, CardContent };
