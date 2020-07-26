import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PersonaQuestion } from '../entity';
import { RootState } from './index';

interface QuestionState {
  questions: PersonaQuestion[];
}

const initialState = {
  questions: [] as PersonaQuestion[],
};

const name = 'QUESTIONS';

// Reducers
const reducers = {
  setQuestions: (state: QuestionState, { payload }: PayloadAction<PersonaQuestion[]>) => {
    state.questions = payload;
  },
};

// createSlice returns a "slice" object 
// that contains the generated reducer function as a field named reducer
// and the generated action creators inside an object called actions.
// Reference: https://redux-toolkit.js.org/tutorials/basic-tutorial
const slice = createSlice({
  name,
  initialState,
  reducers,
});

// createSelector(...inputSelectors | [inputSelectors], resultFunc)
// react-toolkit에서 reselect 라이브러리를 포함해 제공합니다.
// 저장소에서 필요한 부분을 slice(쪼개다, 조각내다)하여 컴포넌트로 제공해 줍니다.
// Takes one or more selectors, or an array of selectors, 
// computes their values and passes them as arguments to resultFunc.
// createSelector determines if the value returned by an input-selector has changed between calls
// using reference equality (===). 
// Inputs to selectors created with createSelector should be immutable.
// Reference: https://github.com/reduxjs/reselect#createselectorinputselectors--inputselectors-resultfunc
export const personaQuestionSelector = createSelector(
  (state: RootState) => state[QUESTIONS],
  (questions) => questions,
);

export const QUESTIONS = slice.name;
export const questionsReducer = slice.reducer;
export const questionsAction = slice.actions;
