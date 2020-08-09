import styled from 'styled-components';
import color from 'styles/color';

const ACITVE_THUMBNAIL = `
  background-blend-mode: multiply;
  background-image: linear-gradient(to bottom, #ffc856, #ffc856);
`;

const INACITVE_THUMBNAIL = `background-color: ${color.basicWhite};`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: normal;
  width: 56px;
  height: 63px;
  margin-right: 0.5rem;
`;

const Thumbnail = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 56px;
  height: 56px;
  border-radius: 2px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08);
  ${({ active }) => (active ? ACITVE_THUMBNAIL : INACITVE_THUMBNAIL)}
  span {
    width: 43px;
    height: 36px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ActiveBar = styled.span`
  width: 56px;
  height: 5px;
  margin-top: 2px;
  border-radius: 2.5px;
  background-color: #ffc856;
`;

export { Container, Thumbnail, ActiveBar };
