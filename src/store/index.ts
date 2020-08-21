import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { QUESTIONS, questionsReducer } from './personaQuestionsSlice';
import { ROOMS, roomsReducer } from './roomsSlice';

const rootReducer = combineReducers({
  [QUESTIONS]: questionsReducer,
  [ROOMS]: roomsReducer,
});

export const createStore = (): EnhancedStore => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
