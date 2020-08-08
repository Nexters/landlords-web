import { Room } from 'entity/checklist';
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
  const { name, active } = room;
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Thumbnail active={active}>
        <span>{name}</span>
      </S.Thumbnail>
      {active && <S.ActiveBar />}
    </S.Container>
  );
}
