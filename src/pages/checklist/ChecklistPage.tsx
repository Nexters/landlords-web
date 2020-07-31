import { CheckLayout, Icon, RoomCard, SelectLayout } from 'components';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import mock from './ChecklistPage.mock';
import * as S from './styled';

const CONTENT_LABEL = {
  location: '주소',
  form: '주거형태',
  size: '전용면적',
  floor: '층/건물층수',
  elevator: '엘리베이터',
  expenses: '관리비',
};

type ContentLabelType = keyof typeof CONTENT_LABEL;

export default function ChecklistPage(): ReactElement {
  const { rooms, activeRoom } = useSelector(roomsSelector);
  const { setRooms } = roomsAction;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRoomSelect = (index: number) => () => {
    const nextRooms = rooms.map((room) => ({ ...room, active: false }));
    nextRooms[index].active = true;
    dispatch(setRooms(nextRooms));
  };

  useEffect(() => {
    dispatch(setRooms(mock));
  }, []);

  return rooms.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <S.Container>
      <S.CategoryHeader>
        <div>
          <S.BackButton>
            <Icon name='NAVIGATION_BACKWARD' size='16' />
          </S.BackButton>
          <S.CategoryTitle>자취방 체크리스트</S.CategoryTitle>
        </div>
      </S.CategoryHeader>
      <S.ComparisonLayer>
        <span>체크한 방을 비교해보세요.</span>
        <S.ComparisonButton onClick={() => history.push('/')}>비교하기</S.ComparisonButton>
      </S.ComparisonLayer>
      <S.RoomCardList>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} onClick={handleRoomSelect(index)} />
        ))}
        <RoomCard isEmpty={true} />
      </S.RoomCardList>
      <S.RoomContentWrapper>
        <S.RoomContent>
          <S.RoomDetail>
            <S.RoomDetailTitle>{activeRoom.cost}</S.RoomDetailTitle>
            {Object.keys(CONTENT_LABEL).map((key) => (
              <S.RoomDetailRow key={key}>
                <span>{CONTENT_LABEL[key as ContentLabelType]}</span>
                <span>{activeRoom[key as ContentLabelType]}</span>
              </S.RoomDetailRow>
            ))}
          </S.RoomDetail>
          <CheckLayout />
          <SelectLayout />
          <S.DeleteButton>방 삭제하기</S.DeleteButton>
        </S.RoomContent>
      </S.RoomContentWrapper>
    </S.Container>
  );
}
