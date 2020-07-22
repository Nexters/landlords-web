import styled from 'styled-components';

export interface ModalStyleProps {
  visible: boolean;
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${({ visible }: ModalStyleProps) => (visible ? 'block' : 'none')};
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
  display: ${({ visible }: ModalStyleProps) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  transition: background-color 1s ease;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px 40px;
`;

const ModalCloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export { ModalInner, ModalWrapper, ModalOverlay, ModalCloseButton };
