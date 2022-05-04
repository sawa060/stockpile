import * as yup from 'yup';

import {janCodeRule} from './jan_code_rule';

describe('maxDigitRule', () => {
  const schema = yup.string().test(janCodeRule());

  it('should error when over max digit', () => {
    expect.hasAssertions();
    expect(() => schema.validateSync('あabc-123-(456)')).toThrow(
      '半角英数字と半角記号のみ入力が可能です',
    );
    expect(() => schema.validateSync('Ａ-123-(456)')).toThrow(
      '半角英数字と半角記号のみ入力が可能です',
    );
  });

  it('should not error when valid value', () => {
    expect.hasAssertions();
    expect(() => schema.validateSync('(123)_AbC-7890')).not.toThrow();
  });
});
