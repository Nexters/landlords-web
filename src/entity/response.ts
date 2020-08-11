export interface Response<T = object> {
  data: T;
  error: boolean;
  message?: string;
}
