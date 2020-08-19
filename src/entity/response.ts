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

export interface QuestionsResponse {
  questions: PersonaQuestion[];
}
