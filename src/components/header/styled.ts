import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  background: ${color.grayscalef9};
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

const TitleLeftContainer = styled.div`
  display: flex;
  & :first-child {
    margin-right: 8px;
  };
`;

const Title = styled.h1`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  color: ${color.grayscale29};
`;

export { Container, Title, TitleLeftContainer };
