import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonaQuestion } from '../entity';
import {RootState} from './index';

interface QuestionState {
  questions: PersonaQuestion[];
}

const initialState = {
  questions: [] as PersonaQuestion[],
};

const name = 'QUESTIONS';

const reducers = {
  setQuestions: (state: QuestionState, { payload }: PayloadAction<PersonaQuestion[]>) => {
    state.questions = payload;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const personaQuestionSelector = createSelector(
  (state: RootState) => state[QUESTIONS],
  (questions) => questions,
);

export const QUESTIONS = slice.name;
export const questionsReducer = slice.reducer;
export const questionsAction = slice.actions;
