import { ANSWERS_URL, CHECKLIST_URL } from 'api/constants';
import request from 'api/request';
import { Icon } from 'components';
import { STATUS_MATCHER } from 'entity/checklist';
import { AnswersResponse, CheckQuestionsResponse, RoomsResponse } from 'entity/response';
import { ROOM_CONTENTS_LABEL } from 'entity/rooms';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { roomsAction, roomsSelector } from 'store/roomsSlice';

import CheckboxLayout from './checkbox-layout';
import RoomCard from './room-card';
import RoomDeleteModal from './room-delete-modal';
import * as S from './styled';

export type RoomContentProps = keyof typeof ROOM_CONTENTS_LABEL;

export default function ChecklistPage(): ReactElement {
  const {
    rooms,
    selectedRoom,
    singleCheckQuestions,
    multiCheckQuestions,
    checklistStatus,
  } = useSelector(roomsSelector);
  const { setRooms, setQuestoinsAndAnswers } = roomsAction;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpenRoomDeleteModal, setOpenRoomDeleteModal] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      if (rooms.length > 0) return;
      const { data, error } = await request.get<RoomsResponse>('/rooms');
      if (!error) dispatch(setRooms(data.rooms));
    };
    const fetchQuestionsAndAnswers = async () => {
      const fetchedQuestions = await request.get<CheckQuestionsResponse>(
        CHECKLIST_URL(checklistStatus),
      );
      const fetchedAnswers = await request.get<AnswersResponse>(ANSWERS_URL(selectedRoom.uid));
      if (fetchedQuestions.error) alert(fetchedQuestions.message);
      else
        dispatch(
          setQuestoinsAndAnswers({
            questions: fetchedQuestions.data.questions,
            answers: fetchedAnswers.data.check_items || [],
          }),
        );
    };
    fetchRooms();
    if (rooms.length > 0) fetchQuestionsAndAnswers();
    else history.push('/rooms');
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => history.push('/rooms')}>
          <Icon name='NAVIGATION_BACKWARD' size='16' />
        </S.BackButton>
        <S.HeaderTitle>{STATUS_MATCHER[checklistStatus]} 체크리스트</S.HeaderTitle>
      </S.Header>
      <S.RoomCardList>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
        <S.EmtpyRoomCard onClick={() => history.push('/add-room/via-link')}>+</S.EmtpyRoomCard>
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
