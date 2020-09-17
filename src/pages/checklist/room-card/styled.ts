import { Icon } from 'components';
import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 63px;
  margin-right: 0.5rem;
`;

const Thumbnail = styled.img<{ active: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 2px;
  ${({ active }) => (active ? 'filter:sepia(100%)' : 'filter:grayscale(50%)')};
`;

const IconWrapper = styled(Icon)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: ${({ active }) => (active ? color.primaryYellow : color.basicWhite)};
  filter: ${({ active }) => (active ? 'sepia(100%)' : 'grayscale(50%)')};
`;

const ActiveBar = styled.span`
  width: 56px;
  height: 5px;
  margin-top: 2px;
  border-radius: 2.5px;
  background-color: #ffc856;
`;

export { Container, Thumbnail, IconWrapper, ActiveBar };
