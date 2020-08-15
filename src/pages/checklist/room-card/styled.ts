import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: normal;
  width: 56px;
  height: 63px;
  margin-right: 0.5rem;
`;

const Thumbnail = styled.span`
  width: 56px;
  height: 56px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.08);
  img {
    position: absolute;
    width: 56px;
    height: 56px;
    border-radius: 2px;
  }
`;

const ThumnailOverlay = styled.span<{ active: boolean }>`
  position: absolute;
  width: 56px;
  height: 56px;
  z-index: 2;
  opacity: 0.5;
  border-radius: 2px;
  ${({ active }) => active && `background-color: ${color.primaryYellow}`};
`;

const ActiveBar = styled.span`
  width: 56px;
  height: 5px;
  margin-top: 2px;
  border-radius: 2.5px;
  background-color: #ffc856;
`;

export { Container, Thumbnail, ThumnailOverlay, ActiveBar };
