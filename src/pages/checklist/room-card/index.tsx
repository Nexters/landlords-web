import { Icon } from 'components';
import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room: ConvertedRoom;
}

export default function RoomCard({ className, room }: RoomCardProps): ReactElement {
  const { selectedRoom } = useSelector(roomsSelector);
  const { setSelectedRoom } = roomsAction;
  const dispatch = useDispatch();

  return (
    <S.Container className={className} onClick={() => dispatch(setSelectedRoom(room))}>
      {room.imageUrl ? (
        <S.Thumbnail src={room.imageUrl} active={room.uid === selectedRoom.uid} />
      ) : (
        <S.IconWrapper name='NO_IMAGE_ROOM' size='32' active={room.uid === selectedRoom.uid} />
      )}
      {room.uid === selectedRoom.uid && <S.ActiveBar />}
    </S.Container>
  );
}
