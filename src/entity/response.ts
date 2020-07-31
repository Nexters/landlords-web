export interface Response<T = object> {
  code: string;
  message: string;
  isSuccess?: boolean;
  data: T;
}
