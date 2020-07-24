import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit';

// import authReducer from './auth';
import {QUESTIONS,questionsReducer} from './personaQuestionsSlice';

// const reducer = combineReducers({ authReducer, personaReducer });
// export const store = configureStore({ reducer });

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
