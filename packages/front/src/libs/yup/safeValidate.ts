import {ObjectSchema} from 'yup';

import {ErrorType as TErrorType, yupFormatError} from './formatError';

// re-exportするとおこられるので。。。
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorType<T extends ObjectSchema<any>> = TErrorType<T>;

interface SuccessType {
  success: true;
}

// なんでもいいのでany
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FailedType<S extends ObjectSchema<any>> {
  success: false;
  errors: ErrorType<S>;
}

/**
 * yupのvalidateをtry catchしなくてもいいヘルパー
 * @example
 * const r = await safeValidate(schema, {name: 'my name'});
 * if (r.success === false) {
 *   return r.error.quotationDeliveryDate;
 * }
 * const f: undefined = r.error;
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function safeValidate<S extends ObjectSchema<any>>(
  schema: S,
  ...[data, options]: Parameters<S['validate']>
): Promise<SuccessType | FailedType<S>> {
  try {
    await schema.validate(data, {abortEarly: false, ...options});
    return {
      success: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      errors: yupFormatError(error),
    };
  }
}

/**
 * yupのvalidateをtry catchしなくてもいいヘルパー
 * @example
 * const r = safeValidateSync(schema, {name: 'my name'});
 * if (r.success === false) {
 *   return r.error.quotationDeliveryDate;
 * }
 * const f: undefined = r.error;
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeValidateSync<S extends ObjectSchema<any>>(
  schema: S,
  ...[data, options]: Parameters<S['validateSync']>
): SuccessType | FailedType<S> {
  try {
    schema.validateSync(data, {abortEarly: false, ...options});
    return {
      success: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      errors: yupFormatError(error),
    };
  }
}
