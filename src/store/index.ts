import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';

import { QUESTIONS, questionsReducer } from './personaQuestionsSlice';

const rootReducer = combineReducers({
  [QUESTIONS]: questionsReducer,
});

export const createStore = (): EnhancedStore => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
