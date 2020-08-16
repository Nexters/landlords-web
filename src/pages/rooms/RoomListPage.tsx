import request from 'api/request';
import { Icon } from 'components';
import { RoomsResponse } from 'entity/response';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import MenuBar from './menu-bar';
import RoomCard from './room-card';
import * as S from './styled';

export default function RoomListPage() {
  const { rooms } = useSelector(roomsSelector);
  const { setRooms } = roomsAction;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error, message } = await request.get<RoomsResponse>('/rooms');
      if (error) {
        alert(message);
        return;
      }
      dispatch(setRooms(data.rooms));
    };
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
      <MenuBar />
      <S.RoomContainer>
        {rooms.map((room, idx) => (
          <RoomCard key={idx} room={room} />
        ))}
        <S.EmptyRoomCard>+</S.EmptyRoomCard>
      </S.RoomContainer>
    </S.Container>
  );
}
