import { apiBaseURL } from 'api/constants';
import request from 'api/request';
import { RoomsResponse } from 'entity/response';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';
import color from 'styles/color';
import { ContainerWrapper } from 'styles/styled';

import MenuBar from './menu-bar';
import RoomCard from './room-card';
import * as S from './styled';

export default function RoomListPage() {
  const { rooms } = useSelector(roomsSelector);
  const { setRooms } = roomsAction;
  const dispatch = useDispatch();
  const userName = sessionStorage.getItem('userName');
  const history = useHistory();

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await request.get<RoomsResponse>('/rooms');
      const { data, error, message, status } = response;
      if (status === 401) {
        sessionStorage.clear();
        window.location.href = `${apiBaseURL}/oauth/kakao`;
      } else if (error) alert(message);
      else dispatch(setRooms(data.rooms));
    };
    fetchRooms();
  }, []);

  return (
    <ContainerWrapper bgColor={color.grayscalef9}>
      <S.Container>
        <S.Header>
          <S.HeaderTitle>
            <span> {userName || '누군가'}&#39;s</span>
            <S.LogoIcon name='TITLE_LOGO' />
          </S.HeaderTitle>
          <S.MypageIcon name='HUMAN_NORMAL' size='17' />
        </S.Header>
        <div style={{ zIndex: 1000 }}>
          <MenuBar />
        </div>
        <S.RoomContainer>
          {rooms.map((room, idx) => (
            <RoomCard key={idx} room={room} />
          ))}
          <S.EmptyRoomCard onClick={() => history.push('/add-room/via-link')}>+</S.EmptyRoomCard>
        </S.RoomContainer>
      </S.Container>
    </ContainerWrapper>
  );
}
