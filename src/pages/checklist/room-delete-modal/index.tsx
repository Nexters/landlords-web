import { Modal } from 'components';
import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';

import * as S from './styled';

interface RoomDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  target?: ConvertedRoom;
}

export default function RoomDeleteModal({
  isOpen,
  onClose,
  target,
}: RoomDeleteModalProps): ReactElement {
  return (
    <Modal
      className='room-delete-modal'
      onClose={onClose}
      hasCloseButton={true}
      maskClosable={false}
      visible={isOpen}
      width='312px'>
      <S.Container>
        <S.MessageWrapper>
          <span>{`'${target?.name}' 방을`}</span>
          <span>삭제하시겠습니까?</span>
        </S.MessageWrapper>
        <S.ButtonsWrapper>
          <S.CancelButton onClick={onClose}>아니요, 그냥 둘게요</S.CancelButton>
          <S.ConfirmButton>네, 삭제할래요</S.ConfirmButton>
        </S.ButtonsWrapper>
      </S.Container>
    </Modal>
  );
}
