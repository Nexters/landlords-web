import styled from 'styled-components';
import color from 'styles/color';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  height: 83px;
  border: solid 1px ${color.grayscale29};
  border-radius: 6px;
  background-color: ${color.basicWhite};
  box-shadow: 1px 1px 0 2px ${color.grayscale29};
`;

const CardContent = styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  color: ${color.primaryDeepDarkBlue};
  text-align: center;
`;

const Highlight = styled.span`
  background-color: ${color.secondaryYellow};
`;

export { CardWrapper, CardContent, Highlight };
