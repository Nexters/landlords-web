import React, { SyntheticEvent,useEffect } from 'react';

import CloseButton from './CloseButton';
import * as S from './styled';;

interface ModalProps {
  className?: string;
  onClose: () => void;
  maskClosable: boolean;
  closable: boolean;
  visible: boolean;
  children: React.ReactNode;
}

export default function Modal({
  className = 'modal-class',
  onClose,
  maskClosable,
  closable,
  visible,
  children,
}: ModalProps) {
  const onMaskClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const close = () => {
    onClose();
  };

  return (
    <div className={className} >
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper
        onClick={maskClosable ? onMaskClick : () => null}
        tabIndex={-1}
        visible={visible}
      >
        <S.ModalInner tabIndex={0} className="modal-inner">
          {closable && <S.ModalCloseButton><CloseButton onClick={close} /></S.ModalCloseButton>}
          {children}
        </S.ModalInner>
      </S.ModalWrapper>
    </div>
  );
}
