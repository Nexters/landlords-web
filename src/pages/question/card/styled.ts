import styled from 'styled-components';
import color from 'styles/color';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
  height: 178px;
  border: 4px solid ${color.basicBlack};
  background-color: ${color.basicWhite};
  box-shadow: 10px 5px 0 ${color.basicBlack};
`;
const CardContent = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: ${color.basicBlack};
`;

export { CardWrapper, CardContent };
