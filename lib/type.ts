import type { AxiosError } from 'axios';

export type Response<T> = Promise<
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: Error;
    }
>;

export const isAxiosError = (err: Error): err is AxiosError =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  Boolean(err.isAxiosError);
