import styled from 'styled-components';
import color from 'styles/color';

interface ButtonProps {
  bgColor?: string;
  borderColor?: string;
}
const Button = styled.button<ButtonProps>`
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'none'};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : 'none'};
  height: 54px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.03);
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  text-align: center;
  color: ${color.grayscale29};
`;

export { Button };
