import { ROOM_URL } from 'api/constants';
import request from 'api/request';
import { Modal } from 'components';
import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

interface RoomDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: ConvertedRoom;
}

export default function RoomDeleteModal({
  isOpen,
  onClose,
  target,
}: RoomDeleteModalProps): ReactElement {
  const { rooms } = useSelector(roomsSelector);
  const { removeRoom } = roomsAction;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleConfirmClick = async () => {
    const { error } = await request.delete(ROOM_URL(target.uid));
    if (error) alert('방 삭제 실패');
    else if (rooms.length === 1) history.push('/rooms');
    else {
      const lastRoom = rooms[rooms.length - 1];
      const nextRoomId = lastRoom.uid === target.uid ? rooms[rooms.length - 2].uid : lastRoom.uid;
      dispatch(removeRoom(target));
      history.push(`/rooms/${nextRoomId}`);
    }
  };

  return (
    <Modal
      className='room-delete-modal'
      onClose={onClose}
      hasCloseButton={true}
      maskClosable={true}
      visible={isOpen}
      width='312px'>
      <S.Container>
        <S.MessageWrapper>
          <span>{`'${target.name}' 방을`}</span>
          <span>삭제하시겠습니까?</span>
        </S.MessageWrapper>
        <S.ButtonsWrapper>
          <S.CancelButton onClick={onClose}>아니요, 그냥 둘게요</S.CancelButton>
          <S.ConfirmButton onClick={handleConfirmClick}>네, 삭제할래요</S.ConfirmButton>
        </S.ButtonsWrapper>
      </S.Container>
    </Modal>
  );
}
