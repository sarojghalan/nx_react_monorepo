// import { Navbar } from '@org/client//layouts';
// import './app.module.css';
// import { Form } from '@org/client/components/form';
// import { BusinessUnit } from '@org/client/pages';

// export function App() {
//   return (
//     <div>
//       <BusinessUnit />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useForm } from 'react-hook-form';
import { z, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const addressSchema = z.object({
  title: z.string().min(1, { message: 'Please insert title' }),
  address: z.object({
    primary: z.object({
      sCode: z.string().min(1, { message: 'Enter your Primary Scode' }),
      dCode: z.string().min(1, { message: 'Enter your Primary Dcode' }),
      pCode: z.string().min(1, { message: 'Enter your Primary Pcode' })
    }),
    temporary: z.object({
      sCode: z.string().min(1, { message: 'Enter your Temporary Scode' }),
      dCode: z.string().min(1, { message: 'Enter your Temporary Dcode' }),
      pCode: z.string().min(1, { message: 'Enter your Temporary Pcode' })
    })
  })
});
function AddressForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(addressSchema)
  });

  const onSubmit = (data) => {
    const flattenedData = [
      { ...data.address.primary },
      { ...data.address.temporary }
    ];
    console.log(flattenedData);
    console.log('data : ', data);
  };

  console.log(errors?.address.primary.sCode.message);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Title</h2>
        <input
          className="m-4 border-cyan-300 "
          {...register('title')}
          placeholder="ENter Title"
        />
        {errors.title && (
          <span className="text-red-700">{errors?.title?.message}</span>
        )}
        <h2>Primary Address</h2>
        <input
          className="m-4 border-cyan-300 "
          {...register('address.primary.sCode')}
          placeholder="Street Code"
        />
        {errors?.address?.primary?.sCode && (
          <span className="text-red-700">
            {errors?.address?.primary?.sCode?.message}
          </span>
        )}
        <input
          className="m-4 border-cyan-300 "
          {...register('address.primary.dCode')}
          placeholder="District Code"
        />
        {errors?.address?.primary?.dCode && (
          <span className="text-red-700">
            {errors?.address?.primary?.dCode?.message}
          </span>
        )}
        <input
          className="m-4 border-cyan-300 "
          {...register('address.primary.pCode')}
          placeholder="Postal Code"
        />
        {errors?.address?.primary?.pCode && (
          <span className="text-red-700">
            {errors?.address?.primary?.pCode?.message}
          </span>
        )}
      </div>

      <div>
        <h2>Temporary Address</h2>
        <input
          className="m-4 border-cyan-300 "
          {...register('address.temporary.sCode')}
          placeholder="Street Code"
        />
        {errors?.address?.temporary?.sCode && (
          <span className="text-red-700">
            {errors?.address?.temporary?.sCode.message}
          </span>
        )}
        <input
          className="m-4 border-cyan-300 "
          {...register('address.temporary.dCode')}
          placeholder="District Code"
        />
        {errors?.address?.temporary?.dCode && (
          <span className="text-red-700">
            {errors?.address?.temporary?.dCode.message}
          </span>
        )}
        <input
          className="m-4 border-cyan-300 "
          {...register('address.temporary.pCode')}
          placeholder="Postal Code"
        />
        {errors?.address?.temporary?.pCode && (
          <span className="text-red-700">
            {errors?.address?.temporary?.pCode.message}
          </span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddressForm;
