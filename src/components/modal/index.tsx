import React, { SyntheticEvent,useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseButton from './CloseButton';
import Portal from './Portal';
import * as S from './styled';

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
      onClose();
      console.log('onMaskClick');
    }
  };

  const close = () => {
    if (onClose) {
      onClose();
      console.log('onClose');
    }
  };

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = 'position: ""; top: "";';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <>
      <div className='modal-root'>
        <CSSTransition
          in={ visible }
          timeout={ 500 }
          classNames="dialog"
        >
          <S.ModalOverlay visible={ visible } />
        </CSSTransition>
        <S.ModalWrapper
          className={ className }
          onClick={ maskClosable ? onMaskClick : () => null }
          tabIndex={ -1 }
          visible={ visible }
        >
          <S.ModalInner tabIndex={ 0 } className="modal-inner">
            {closable && <CloseButton onClick={ close } />}
            {children}
          </S.ModalInner>
        </S.ModalWrapper>
      </div>
    </>
  );
}
