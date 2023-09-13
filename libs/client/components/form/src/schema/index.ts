import { z } from 'zod';

const EMAIL_REQUIRED_MESSAGE = 'username field is required';
const PASSWORD_REQUIRED_MESSAGE = 'password field is required';

export const formSchema = z.object({
  email: z.string().nonempty({ message: EMAIL_REQUIRED_MESSAGE }),
  password: z.string().nonempty({ message: PASSWORD_REQUIRED_MESSAGE }),
});

// extracting type from formSchema
export type FormSchemaData = z.infer<typeof formSchema>;
