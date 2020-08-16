import { CheckItem, Question } from './checklist';
import { Room } from './rooms';

export interface Response<T = object> {
  data: T;
  error: boolean;
  message?: string;
}

export interface RoomsResponse {
  rooms: Room[];
}

export interface QuestionsResponse {
  questions: Question[];
}

export interface AnswersResponse {
  check_items: CheckItem[];
}
