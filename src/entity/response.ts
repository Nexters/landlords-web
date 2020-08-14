import { Room } from './rooms';

export interface Response<T = object> {
  data: T;
  error: boolean;
  message?: string;
}

export interface RoomsResponse {
  rooms: Room[];
}
