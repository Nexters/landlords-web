import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { QUESTIONS, questionsReducer } from './personaQuestionsSlice';
import { ROOM, roomReducer } from './roomSlice';
import { ROOMS, roomsReducer } from './roomsSlice';;

const rootReducer = combineReducers({
  [QUESTIONS]: questionsReducer,
  [ROOMS]: roomsReducer,
  [ROOM]: roomReducer,
});

export const createStore = (): EnhancedStore => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
