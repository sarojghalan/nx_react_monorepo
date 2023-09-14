import { useForm } from 'react-hook-form';
import { formSchema, FormSchemaData } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { red } from '@mui/material/colors';
export const Form = () => {
  const initialState = {
    email: '',
    password: ''
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...initialState }
  });

  const onSubmit = (data: FormSchemaData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Email : </label>
        <input
          type="text"
          {...register('email')}
          placeholder="Enter Email Here ..."
        />
        <span style={{ color: 'red' }}>{errors.email?.message}</span>
      </div>
      <div>
        <label htmlFor="">Password : </label>
        <input
          type="password"
          {...register('email')}
          placeholder="Enter Password Here ..."
        />
        <span style={{ color: 'red' }}>{errors.email?.message}</span>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div className="flex items-center justify-center h-screen">
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
        <p>asdfasdf</p>
      </div>
    </form>
  );
};
