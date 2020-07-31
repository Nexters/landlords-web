import { BottomNavigation, Header, Icon } from 'components';
import React from 'react';

import MenuBar from './MenuBar';
import * as S from './styled';

export default function RoomList() {
  const mockRooms = new Array(2).fill(0);

  return (
    <S.Container>
      <Header title={"예희's 체크리스트"}>
        <Icon name='HUMAN_NORMAL' size='17' />
      </Header>
      <MenuBar />
      <S.RoomContainer>
        {mockRooms.map((item, idx) => (
          <S.RoomBox key={idx} />
        ))}
        <S.CreateBox />
      </S.RoomContainer>
      <BottomNavigation />
    </S.Container>
  );
}
