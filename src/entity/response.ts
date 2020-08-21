import { CheckItem, CheckQuestion } from './checklist';
import { PersonaQuestion } from './persona';
import { Room } from './rooms';

export interface Response<T = object> {
  data: T;
  error: boolean;
  message?: string;
}

export interface RoomsResponse {
  rooms: Room[];
}

export interface CheckQuestionsResponse {
  questions: CheckQuestion[];
}

export interface AnswersResponse {
  check_items: CheckItem[];
}

export interface PersonaQuestionsResponse {
  questions: PersonaQuestion[];
}
