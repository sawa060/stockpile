/* =============== refactor lint rules =============== */
/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {addMethod, array} from 'yup';

addMethod(
  array,
  'unique',
  function (field: string, message: string = '選択候補内で同じ値が存在しています。') {
    return this.test('unique', message, function (list) {
      const {createError, path} = this;

      const mapper = (a: any) => a[field];

      const setUniq = [...new Set((list || []).map(mapper))];

      const items = list || [];

      if (items.length !== setUniq.length) {
        const idx = items.findIndex((item, index) => mapper(item) !== setUniq[index]);
        if (idx !== -1) return createError({path: `${path}[${idx}].${field}`, message});
      }
      return true;
    });
  },
);
