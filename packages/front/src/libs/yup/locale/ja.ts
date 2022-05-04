import type {setLocale} from 'yup';

type LocalObject = Parameters<typeof setLocale>[0];

const mixed: LocalObject['mixed'] = {
  default: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}正しい値を入力してください`,
  required: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}は` : ''}入力必須です`,
  oneOf: ({label, values}: {label: string; values: unknown}) =>
    `${label ? `${label}: {label: string}には` : ''}${values}のいずれかを入力してください`,
  notOneOf: ({label, values}: {label: string; values: unknown}) =>
    `${label ? `${label}: {label: string}には` : ''}${values}以外のものを入力してください`,
  // From user's perspective, defined and default is essentially same.
  defined: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}値を入力してください`,
};

const string: LocalObject['string'] = {
  length: ({label, length}: {label: string; length: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${length}文字で入力してください`,
  min: ({label, min}: {label: string; min: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${min}文字以上入力してください`,
  max: ({label, max}: {label: string; max: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${max}文字以下にしてください`,
  matches: ({label, regex}: {label: string; regex: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}以下の形式で入力してください: ${regex}`,
  email: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}正しいメールアドレスを入力してください`,
  url: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}正しいURLを入力してください`,
  uuid: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}正しいUUIDを入力してください`,
  trim: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}の` : ''}前後の空白を取り除いてください`,
  lowercase: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}小文字のみ入力してください`,
  uppercase: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}大文字のみ入力してください`,
};

const number: LocalObject['number'] = {
  min: ({label, min}: {label: string; min: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${Number(
      min,
    ).toLocaleString()}以上にしてください`,
  max: ({label, max}: {label: string; max: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${Number(
      max,
    ).toLocaleString()}以下にしてください`,
  lessThan: ({label, less}: {label: string; less: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${Number(
      less,
    ).toLocaleString()}未満にしてください`,
  moreThan: ({label, more}: {label: string; more: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${Number(
      more,
    ).toLocaleString()}より大きい数にしてください`,
  positive: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}は` : ''}正の数にしてください`,
  negative: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}は` : ''}負の数にしてください`,
  integer: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}整数を入力してください`,
};

// To format date, use the second argument of yup.date().min/max.
const date: LocalObject['date'] = {
  min: ({label, min}: {label: string; min: unknown}) =>
    `${label ? `${label}: {label: string}には` : ''}${min}以降の日付を入力してください`,
  max: ({label, max}: {label: string; max: unknown}) =>
    `${label ? `${label}: {label: string}には` : ''}${max}以前の日付を入力してください`,
};

const object: LocalObject['object'] = {
  // There is no way to describe `noUnknown` message in suggestive way, right?
  noUnknown: ({label}: {label: string}) =>
    `${label ? `${label}: {label: string}には` : ''}登録されていないキーは入力できません`,
};

const array: LocalObject['array'] = {
  min: ({label, min}: {label: string; min: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${min}つ以上入力してください`,
  max: ({label, max}: {label: string; max: unknown}) =>
    `${label ? `${label}: {label: string}は` : ''}${max}つ以下にしてください`,
};

export const ja: LocalObject = {
  mixed,
  string,
  number,
  date,
  object,
  array,
};
