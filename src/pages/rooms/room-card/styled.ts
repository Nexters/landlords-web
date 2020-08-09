import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  width: 148px;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 6px;
`;

const Title = styled.div`
  margin: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: ${color.grayscale29};
`;

export { Container, Thumbnail, Title };
