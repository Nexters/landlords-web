import request from 'api/request';
import { Icon } from 'components';
import { RoomsResponse } from 'entity/response';
import { ROOM_CONTENTS_LABEL } from 'entity/rooms';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match as Match, useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import CheckboxLayout from './checkbox-layout';
import mock from './ChecklistPage.mock';
import RoomCard from './room-card';
import * as S from './styled';

interface ChecklistPageProps {
  match: Match<{ id: string }>;
}

export type RoomContentProps = keyof typeof ROOM_CONTENTS_LABEL;

export default function ChecklistPage({ match }: ChecklistPageProps): ReactElement {
  const { rooms, roomMap, singleCheckQuestions, multiCheckQuestions } = useSelector(roomsSelector);
  const { setRooms, setQuestions, setAnswers, checkQuestions } = roomsAction;
  const { params } = match;
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedRoom = roomMap[params.id];

  useEffect(() => {
    if (!rooms.length) {
      const fetchRooms = async () => {
        const { data, error } = await request.get<RoomsResponse>('/rooms');
        if (error) {
          alert('방 데이터 로드 실패');
          return;
        }
        dispatch(setRooms(data.rooms));
      };
      fetchRooms();
    }
    dispatch(setQuestions(mock.questions));
    dispatch(setAnswers(mock.answersMap[params.id]));
    dispatch(checkQuestions());
  }, []);

  return (
    <S.Container>
      <S.CategoryHeader>
        <S.BackButton onClick={() => history.push('/rooms')}>
          <Icon name='NAVIGATION_BACKWARD' size='16' />
        </S.BackButton>
        <S.CategoryTitle>자취방 체크리스트</S.CategoryTitle>
      </S.CategoryHeader>
      <S.RoomCardList>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
        <S.EmtpyRoomCard>+</S.EmtpyRoomCard>
      </S.RoomCardList>
      <S.RoomContentWrapper>
        <S.RoomContent>
          {selectedRoom && (
            <S.RoomDetail>
              <S.RoomName>{selectedRoom.name}</S.RoomName>
              {Object.keys(ROOM_CONTENTS_LABEL).map((key) => (
                <S.RoomDescRow key={key}>
                  <span>{ROOM_CONTENTS_LABEL[key as RoomContentProps]}</span>
                  <span>{selectedRoom[key as RoomContentProps]}</span>
                </S.RoomDescRow>
              ))}
            </S.RoomDetail>
          )}
          <CheckboxLayout questions={singleCheckQuestions} />
          <CheckboxLayout questions={multiCheckQuestions} />
          <S.DeleteButton>방 삭제하기</S.DeleteButton>
        </S.RoomContent>
      </S.RoomContentWrapper>
    </S.Container>
  );
}
