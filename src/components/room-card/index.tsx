import { RoomContent } from 'entity/checklist';
import React, { MouseEvent, ReactElement } from 'react';

import * as S from './styled';

interface RoomCardProps {
  className?: string;
  room?: RoomContent;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  isEmpty?: boolean;
}

export default function RoomCard({
  className,
  room,
  onClick = () => {},
  isEmpty = false,
}: RoomCardProps): ReactElement {
  return !isEmpty && room ? (
    <S.Container className={className} onClick={onClick}>
      <S.Thumbnail active={room.active}>
        <span>{room.name}</span>
      </S.Thumbnail>
      {room.active && <S.ActiveBar />}
    </S.Container>
  ) : (
    <S.EmptyContainer>
      <span>+</span>
    </S.EmptyContainer>
  );
}
