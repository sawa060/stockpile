// 型パズルをする際、不要なものをanyでしてる
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * yupのエラーの型定義が定義できない。
 * また、フォーマットもできないので一旦自作する
 */
import type {ObjectSchema, ValidationError} from 'yup';

type RemoveIndex<T> = {
  [P in keyof T as string extends P ? never : number extends P ? never : P]: T[P];
};

type ObjectSchemaType<T extends ObjectSchema<any>> = T extends ObjectSchema<infer O> ? O : never;
export type ErrorType<T extends ObjectSchema<any>> = T extends ObjectSchema<any>
  ? {[key in keyof RemoveIndex<ObjectSchemaType<T>>]?: {message: string}}
  : never;

// TODO: testを導入したらテストすること。
/**
 * yup object schema error format
 * nestしたobjectには対応していません
 * @example
 * const schema = yup.object().shape({name: yup.string().required()});
 * async function check(){
 *   try {
 *     // abortEarlyはfalseにしてください。
 *     schema.validate({name: 'string', {abortEarly: false}})
 *   } catch (e) {
 *     const formattedError = yupFormatError<typeof schema>(e);
 *     console.log(formattedError.name)
 *   }
 * }
 */
export function yupFormatError<SchemaType extends ObjectSchema<any>>(
  error: ValidationError,
): ErrorType<SchemaType> {
  if (!error.inner) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`error object has no inner property`, error);
    }
    throw new Error('validation system error');
  }

  const errorObj: {[key: string]: {message: string}} = {};
  error.inner.forEach((err) => {
    if (err.path && err.message) {
      errorObj[err.path] = {message: err.message};
    }
  });
  return errorObj as ErrorType<SchemaType>;
}
