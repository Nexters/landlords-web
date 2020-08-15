import styled from 'styled-components';

const Container = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  transition: background-color 1s ease;
`;

const ModalInner = styled.div<{ width: string }>`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: ${({ width }) => width};
  max-width: 100vw;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1rem;
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
`;

export { Container, ModalInner, ModalWrapper, ModalOverlay, CloseButtonWrapper, CloseButton };
