import {TestConfig} from 'yup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const janCodeRule = (): TestConfig<any> => ({
  name: 'is-jan-code',
  message: '半角英数字と半角記号のみ入力が可能です',
  /**
   * https://canbright.slack.com/archives/C02F8CFJG31/p1641544710008500
   */
  test: (value: string) => {
    if (!value) {
      return true;
    }
    // eslint-disable-next-line no-control-regex
    const regex = /^[\x00-\x7f]+$/;
    return regex.test(value);
  },
});
