import {ArraySchema as YupArraySchema} from 'yup';

declare module 'yup' {
  interface ArraySchema<T> {
    unique(field: string, message?: string): YupArraySchema<T>;
  }
}
