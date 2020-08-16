import request from 'api/request';
import { Icon } from 'components';
import { RoomsResponse } from 'entity/response';
import { ROOM_CONTENTS_LABEL } from 'entity/rooms';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match as Match, useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import CheckboxLayout from './checkbox-layout';
import mock from './ChecklistPage.mock';
import RoomCard from './room-card';
import RoomDeleteModal from './room-delete-modal';
import * as S from './styled';

interface ChecklistPageProps {
  match: Match<{ id: string }>;
}

export type RoomContentProps = keyof typeof ROOM_CONTENTS_LABEL;

export default function ChecklistPage({ match }: ChecklistPageProps): ReactElement {
  const {
    rooms,
    roomMap,
    singleCheckQuestions,
    multiCheckQuestions,
    checklistStatus,
  } = useSelector(roomsSelector);
  const { setRooms, setQuestions, setAnswers, checkQuestions } = roomsAction;
  const { params } = match;
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedRoom = roomMap[params.id];
  const [isOpenRoomDeleteModal, setOpenRoomDeleteModal] = useState(false);

  useEffect(() => {
    if (!rooms.length) {
      const fetchRooms = async () => {
        const { data, error, message } = await request.get<RoomsResponse>('/rooms');
        if (error) {
          alert(message);
          return;
        }
        dispatch(setRooms(data.rooms));
      };
      fetchRooms();
    }
    if (rooms.length && !roomMap.hasOwnProperty(params.id)) history.goBack();
    dispatch(setQuestions(mock.questions));
    dispatch(setAnswers(mock.answersMap[params.id]));
    dispatch(checkQuestions());
  }, []);

  return (
    <S.Container>
      <S.StateHeader>
        <S.BackButton onClick={() => history.push('/rooms')}>
          <Icon name='NAVIGATION_BACKWARD' size='16' />
        </S.BackButton>
        <S.StateTitle>{checklistStatus} 체크리스트</S.StateTitle>
      </S.StateHeader>
      <S.RoomCardList>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
        <S.EmtpyRoomCard>+</S.EmtpyRoomCard>
      </S.RoomCardList>
      {selectedRoom && (
        <>
          <S.RoomContentWrapper>
            <S.RoomContent>
              <S.RoomDetail>
                <S.RoomName>{selectedRoom.name}</S.RoomName>
                {Object.keys(ROOM_CONTENTS_LABEL).map((key) => (
                  <S.RoomDescRow key={key}>
                    <span>{ROOM_CONTENTS_LABEL[key as RoomContentProps]}</span>
                    <span>{selectedRoom[key as RoomContentProps]}</span>
                  </S.RoomDescRow>
                ))}
              </S.RoomDetail>
              <CheckboxLayout questions={singleCheckQuestions} />
              <CheckboxLayout questions={multiCheckQuestions} />
              <S.DeleteButton onClick={() => setOpenRoomDeleteModal(true)}>
                방 삭제하기
              </S.DeleteButton>
            </S.RoomContent>
          </S.RoomContentWrapper>
          <RoomDeleteModal
            isOpen={isOpenRoomDeleteModal}
            onClose={() => setOpenRoomDeleteModal(false)}
            target={selectedRoom}
          />
        </>
      )}
    </S.Container>
  );
}
