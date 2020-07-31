import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemsByLabel, Room } from 'entity/checklist';
import { RootState } from 'store';

const name = 'ROOMS';

interface RoomsState {
  rooms: Room[];
  activeRoom: Room;
  activeRoomIndex: number;
  checkItemsByLabel: ItemsByLabel;
  selectItemsByLabel: ItemsByLabel;
}

const initialState = {
  rooms: [] as Room[],
  activeRoom: {} as Room,
  activeRoomIndex: 0,
  checkItemsByLabel: {} as ItemsByLabel,
  selectItemsByLabel: {} as ItemsByLabel,
};

const extractItemsByLabel = (room: Room, targetType: string) =>
  room.checklist
    .filter((item) => item.type === targetType)
    .reduce((total: ItemsByLabel, item) => {
      if (total.hasOwnProperty(item.label)) total[item.label].push(item);
      else total[item.label] = [item];
      return total;
    }, {});

const reducers = {
  setRooms: (state: RoomsState, { payload }: PayloadAction<Room[]>) => {
    state.rooms = payload;
    state.activeRoomIndex = payload.findIndex((room) => room.active);
    state.activeRoom = payload[state.activeRoomIndex];
    state.checkItemsByLabel = extractItemsByLabel(state.activeRoom, 'check');
    state.selectItemsByLabel = extractItemsByLabel(state.activeRoom, 'select');
  },
  setActiveRoom: (state: RoomsState, { payload }: PayloadAction<Room>) => {
    state.activeRoom = payload;
  },
  setCheckItemsByLabel: (state: RoomsState, { payload }: PayloadAction<ItemsByLabel>) => {
    state.checkItemsByLabel = payload;
  },
  setSelectItemsByLabel: (state: RoomsState, { payload }: PayloadAction<ItemsByLabel>) => {
    state.selectItemsByLabel = payload;
  },
};

const slice = createSlice({
  name,
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
