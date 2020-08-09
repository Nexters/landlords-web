import { request } from 'api';
import { Icon } from 'components';
import { Room, RoomsResponse } from 'entity/rooms';
import React, { useEffect, useState } from 'react';

import MenuBar from './menu-bar';
import { CATEGORIES } from './menu-bar';
import RoomCard from './room-card';
import * as S from './styled';

export default function RoomListPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [category, setCategory] = useState(CATEGORIES.SEEKING);

  const fetchRooms = async () => {
    const { rooms } = await request.get<RoomsResponse>('/rooms');
    console.log(rooms);
    setRooms(rooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <span>
          예희&#39;s
          <S.LogoIcon name='TITLE_LOGO' />
        </span>
        <Icon name='HUMAN_NORMAL' size='17' />
      </S.Header>
      <MenuBar currentCategory={category} onSelect={setCategory} />
      <S.RoomContainer>
        {rooms.map((room, idx) => (
          <RoomCard key={idx} room={room} />
        ))}
        <S.EmptyRoomCard>+</S.EmptyRoomCard>
      </S.RoomContainer>
    </S.Container>
  );
}
