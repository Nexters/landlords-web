import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConvertedRoom,Room } from 'entity/rooms';
import { RootState } from 'store';
import { convertRoomForDisplay } from 'utils/room';

const name = 'NAME';

interface RoomState {
  room: ConvertedRoom;
}

const initialState = {
  room: {} as ConvertedRoom,
};

const reducers = {
  setRoom: (state: RoomState, { payload }: PayloadAction<ConvertedRoom>) => {
    state.room = payload;
    console.log('payload', payload);
    console.log('room', state.room);
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const roomSelector = createSelector(
  (state: RootState) => state[name],
  room => room,
);

export const ROOM = slice.name;
export const roomReducer = slice.reducer;
export const roomAction = slice.actions;
