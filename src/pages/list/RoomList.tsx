import { Header, Icon } from 'components';
import React from 'react';

import MenuBar from './MenuBar';
import * as S from './styled';

export default function RoomList() {
  const mockRooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <S.Container>
      <Header title={'예희\'s 체크리스트'}>
        <Icon name='ICON_HUMAN_NORMAL' />
      </Header>
      <MenuBar />
      <S.RoomContainer>
        {mockRooms.map(i => <S.RoomBox key={i}/>)}
        <S.CreateBox />
      </S.RoomContainer>
    </S.Container>
  );
}
