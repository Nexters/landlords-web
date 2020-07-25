import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Container = styled.span<{ iconLayoutStyle?: FlattenSimpleInterpolation }>`
  display: inline-block;
  vertical-align: middle;
  img {
    display: block;
    height: 100%;
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
