import { z } from 'zod';

const FIRSTNAME_REQUIRED_MESSAGE = 'First name is required';
const LASTNAME_REQUIRED_MESSAGE = 'Last name is required';
const PHONE_REQUIRED_MESSAGE = 'Phone Number is required';
const EMAIL_REQUIRED_MESSAGE = 'Email is required';
const FATHER_REQUIRED_MESSAGE = 'Father Name is required';
const FATHERNO_REQUIRED_MESSAGE = 'Father Number is required';

export const formSchema = z.object({
  firstName: z.string().min(1, { message: FIRSTNAME_REQUIRED_MESSAGE }),
  lastName: z.string().min(1, { message: LASTNAME_REQUIRED_MESSAGE }),
  email: z.string().min(1, { message: EMAIL_REQUIRED_MESSAGE }),
  phoneNo: z.string().min(1, { message: PHONE_REQUIRED_MESSAGE }),
  fatherName: z.string().nonempty({ message: FATHER_REQUIRED_MESSAGE }),
  fatherNo: z.string().min(1, { message: FATHERNO_REQUIRED_MESSAGE }),
});

// extracting type from formSchema
export type FormSchemaData = z.infer<typeof formSchema>;
