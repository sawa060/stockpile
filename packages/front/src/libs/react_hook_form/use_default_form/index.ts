import {FieldValues, useForm, UseFormProps, UseFormReturn} from 'react-hook-form';

export const useDefaultForm = <T extends FieldValues>(
  props: UseFormProps<T> & {
    defaultValues: T;
  },
): UseFormReturn<T> => useForm({...props});
