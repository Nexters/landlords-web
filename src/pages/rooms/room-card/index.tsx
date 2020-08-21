import { Icon } from 'components';
import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction } from 'store/roomsSlice';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room: ConvertedRoom;
}

export default function RoomCard({ className, room }: RoomCardProps): ReactElement {
  const { setSelectedRoom } = roomsAction;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push('/checklist');
    dispatch(setSelectedRoom(room));
  };

  return (
    <S.Container className={className} onClick={handleClick}>
      {room.imageUrl ? (
        <S.Thumbnail src={room.imageUrl} />
      ) : (
        <S.IconWrapper>
          <Icon name='NO_IMAGE_ROOM' />
        </S.IconWrapper>
      )}
      <S.Title>{room.name}</S.Title>
    </S.Container>
  );
}
