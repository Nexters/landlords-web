import styled from 'styled-components';
import color from 'styles/color';

const Container = styled.div`
  padding: 1rem 1.5rem;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${color.primaryDullPurple};
  span {
    font-size: 16px;
    font-weight: 600;
  }
`;

const CheckboxGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  margin: 0 2px;
  span {
    font-size: 14px;
  }
`;

export { Container, CheckboxGroupWrapper, LabelWrapper };
