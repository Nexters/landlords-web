import styled from 'styled-components';

export const ContainerWrapper = styled.div<{ bgColor: string }>`
  height: 100%;
  width: 100%;
  font-family: Spoqa Han Sans;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColor }) => `${bgColor}`};
`;
