import { ConvertedRoom } from 'entity/rooms';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room: ConvertedRoom;
}

export default function RoomCard({ className, room }: RoomCardProps): ReactElement {
  const history = useHistory();
  const handleClick = () => history.push(`/rooms/${room.uid}`);
  return (
    <S.Container className={className} onClick={handleClick}>
      <S.Thumbnail src={room.imageUrl} />
      <S.Title>{room.name}</S.Title>
    </S.Container>
  );
}
