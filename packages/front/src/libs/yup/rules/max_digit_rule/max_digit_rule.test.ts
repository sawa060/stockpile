import * as yup from 'yup';

import {maxDigitRule} from './max_digit_rule';

describe('maxDigitRule', () => {
  const schema = yup.number().test(maxDigitRule(2));

  it('should error when over max digit', () => {
    expect.hasAssertions();
    expect(() => schema.validateSync(1234.123234)).toThrow('小数点第2桁以下にしてください');
    expect(() => schema.validateSync('1234.123234')).toThrow('小数点第2桁以下にしてください');
  });

  it('should not error when valid value', () => {
    expect.hasAssertions();
    expect(() => schema.validateSync(1234.12)).not.toThrow();
    expect(() => schema.validateSync('123.12')).not.toThrow();
  });
});
