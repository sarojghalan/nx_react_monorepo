import { z } from 'zod';

export const businessUnitValidationSchema = z.object({
  businessUnit_en: z.string().min(1, {
    message: 'Please insert business unit title in english.',
  }),
  businessUnit_np: z.string().min(1, {
    message: 'Please insert business unit title in nepali',
  }),
  buCode: z.string().min(1, {
    message: 'Please insert business unit code',
  }),
  isDisabled: z.string().min(1, {
    message: 'Please select true or false',
  }),
});

export type BusinessUnitValidationSchema = z.infer<
  typeof businessUnitValidationSchema
>;
