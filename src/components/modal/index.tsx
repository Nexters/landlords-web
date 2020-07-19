import * as S from './styled';

import React, { useEffect, SyntheticEvent } from 'react'
import CloseButton from './CloseButton'
import Portal from './Portal'

interface Props {
  className: string;
  onClose: () => void;
  maskClosable: any;
  closable: boolean;
  visible: boolean;
  children: React.ReactNode;
}

export default function Modal({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  children,
} :Props) {
  const onMaskClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const close = () => {
    if (onClose) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = 'position: ""; top: "";'
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return (
    <Portal elementId="modal-root">
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : () => null}
        tabIndex={-1}
        visible={visible}
      >
        <S.ModalInner tabIndex={0} className="modal-inner">
          {closable && <CloseButton onClick={close} />}
          {children}
        </S.ModalInner>
      </S.ModalWrapper>
    </Portal>
  )
}