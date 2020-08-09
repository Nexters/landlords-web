import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Container = styled.span<{ iconLayoutStyle?: FlattenSimpleInterpolation; size?: string }>`
  display: inline-block;
  vertical-align: middle;
  img {
    display: block;
    ${({ size }) => size && `width: ${size}px; height: ${size}px;`}
    fill: currentColor;
    flex-shrink: 0;
    user-select: none;
  }
  ${({ iconLayoutStyle }) => iconLayoutStyle}
`;

const IconLabel = styled.em`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
`;

export { Container, IconLabel };
