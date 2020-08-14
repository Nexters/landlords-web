import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckItem, Question } from 'entity/checklist';
import { ConvertedRoom, Room } from 'entity/rooms';
import { RootState } from 'store';
import { setChecksByAnswers } from 'utils/checklist';
import { convertRoomForDisplay, createRoomMap } from 'utils/room';

export const CHECKLIST_STATE = {
  SEEKING: '방보는중',
  BEFORE_CONTRACT: '방계약전',
  MOVING: '이사중',
};

interface RoomsState {
  rooms: ConvertedRoom[];
  currentChecklistState: string;
  roomMap: { [id: string]: ConvertedRoom };
  singleCheckQuestions: Question[];
  multiCheckQuestions: Question[];
  answers: CheckItem[];
}

const initialState = {
  rooms: [] as ConvertedRoom[],
  currentChecklistState: CHECKLIST_STATE.SEEKING,
  roomMap: {} as { [id: string]: ConvertedRoom },
  singleCheckQuestions: [] as Question[],
  multiCheckQuestions: [] as Question[],
  answers: [] as CheckItem[],
};

const reducers = {
  setRooms: (state: RoomsState, { payload }: PayloadAction<Room[]>) => {
    state.rooms = payload.map((room) => convertRoomForDisplay(room));
    state.roomMap = createRoomMap(state.rooms);
  },
  setCurrentStatus: (state: RoomsState, { payload }: PayloadAction<string>) => {
    state.currentChecklistState = payload;
  },
  setQuestions: (state: RoomsState, { payload }: PayloadAction<Question[]>) => {
    state.singleCheckQuestions = payload.filter(({ type_ }) => type_ === 'SingleChoice');
    state.multiCheckQuestions = payload.filter(({ type_ }) => type_ === 'MultipleChoice');
  },
  setAnswers: (state: RoomsState, { payload }: PayloadAction<CheckItem[]>) => {
    state.answers = payload;
  },
  checkQuestions: (state: RoomsState) => {
    const { singleCheckQuestions, multiCheckQuestions, answers } = state;
    state.singleCheckQuestions = setChecksByAnswers(singleCheckQuestions, answers);
    state.multiCheckQuestions = setChecksByAnswers(multiCheckQuestions, answers);
  },
  addAnswer: (state: RoomsState, { payload }: PayloadAction<CheckItem>) => {
    state.answers.push(payload);
    reducers.checkQuestions(state);
  },
  removeAnswer: (state: RoomsState, { payload }: PayloadAction<CheckItem>) => {
    state.answers = state.answers.filter(({ uid }) => uid !== payload.uid);
    reducers.checkQuestions(state);
  },
};

const slice = createSlice({
  name: 'ROOMS',
  initialState,
  reducers,
});

export const roomsSelector = createSelector(
  (state: RootState) => state[ROOMS],
  (rooms) => rooms,
);

export const ROOMS = slice.name;
export const roomsReducer = slice.reducer;
export const roomsAction = slice.actions;
