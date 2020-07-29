import styled from 'styled-components';
import color from 'styles/color';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  height: 192px;
  border: none;
  border-radius: 4px;
  background-color: ${color.primaryDullPurple};
`;
const CardContent = styled.p`
  font-size: 19px;
  color: ${color.basicWhite};
`;

export { CardWrapper, CardContent };
