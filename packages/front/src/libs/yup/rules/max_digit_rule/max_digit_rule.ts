import {TestConfig} from 'yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function maxDigitRule(max: number): TestConfig<any> {
  return {
    name: 'is-max-digit',
    // eslint-disable-next-line no-template-curly-in-string
    message: '小数点第${max}桁以下にしてください',
    params: {max},
    test: (value) => {
      if (Number.isNaN(value)) {
        return true;
      }
      const chars = Number(value).toString().split('.');
      if (chars.length < 2) {
        return true;
      }
      const digitChar = chars[1];
      return digitChar.length <= max;
    },
  };
}
