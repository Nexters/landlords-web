import { Icon } from 'components';
import React, { SyntheticEvent } from 'react';

import * as S from './styled';

interface ModalProps {
  className?: string;
  onClose: () => void;
  maskClosable: boolean;
  hasCloseButton: boolean;
  visible: boolean;
  children: React.ReactNode;
  width?: string;
}

export default function Modal({
  className,
  onClose,
  maskClosable,
  hasCloseButton,
  visible,
  children,
  width = '160px',
}: ModalProps) {
  const handleMaskClick = (e: SyntheticEvent) => {
    if (!maskClosable) return;
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <S.Container className={className} visible={visible}>
      <S.ModalOverlay />
      <S.ModalWrapper onClick={handleMaskClick}>
        <S.ModalInner width={width}>
          {hasCloseButton && (
            <S.CloseButtonWrapper>
              <S.CloseButton onClick={onClose}>
                <Icon name='CANCEL_DARK' size='16' />
              </S.CloseButton>
            </S.CloseButtonWrapper>
          )}
          {children}
        </S.ModalInner>
      </S.ModalWrapper>
    </S.Container>
  );
}
