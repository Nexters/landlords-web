import { Room } from 'entity/rooms';
import React, { MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room: Room;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
}

export default function RoomCard({
  className,
  room,
  onClick = () => {},
}: RoomCardProps): ReactElement {
  const { image, deposit, monthly_rent } = room;
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Thumbnail src={image} />
      <S.Title>{monthly_rent > 0 ? `월세 ${deposit}/${monthly_rent}` : `전세 ${deposit}`}</S.Title>
    </S.Container>
  );
}
