import React from 'react';
import { useZodForm } from '@org/client/utility';
import {
  BusinessUnitValidationSchema,
  businessUnitValidationSchema
} from './schema';
import { error } from 'console';
import axios from 'axios';

const fieldTextArr = [
  {
    id: 1,
    name: 'businessUnit_en',
    text: 'Business Unit in English',
    title: 'Business Unit (English)'
  },
  {
    id: 2,
    name: 'businessUnit_np',
    text: 'Business Unit in Nepali',
    title: 'Business Unit (Nepali)'
  },
  {
    id: 3,
    name: 'buCode',
    text: 'Business Unit Code',
    title: 'Business Unit Code'
  },
  {
    id: 4,
    name: 'isDisabled',
    text: 'Disable Status',
    title: 'Disable'
  }
];

export const BusinessUnit = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors, isValidating, isDirty }
  } = useZodForm({
    schema: businessUnitValidationSchema,
    defaultValues: {
      businessUnit_en: '',
      businessUnit_np: '',
      buCode: '0',
      isDisabled: 'false'
    },
    mode: 'onChange'
  });

  React.useEffect(() => {
    axios({
      url: 'http://110.34.24.117:86/api/BusinessUnit/InsBUnit',
      method: 'POST',
      data: {}
    });
  }, []);

  const isSubmittable = !!isDirty && !!isValid;

  const submitHandler = (data: BusinessUnitValidationSchema) => {
    axios({
      url: 'http://110.34.24.117:86/api/BusinessUnit/InsBUnit',
      method: 'POST',
      data: { ...data }
    })
      .then(() => {
        alert('success fully loaded.');
      })
      .catch(() => {
        alert('error fully loaded.');
      });
  };

  console.log('errors data : ', errors);

  return (
    <div className="flex items-center justify-center bg-black h-screen">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-gray-400 p-10 rounded-md"
      >
        {fieldTextArr.map((item) =>
          item.title === 'Disable' ? (
            <>
              <div>
                <label htmlFor="">Status</label>
                <select
                  className="w-full py-2 rounded-md"
                  {...register('isDisabled')}
                  name=""
                  id=""
                >
                  <option value="">...select</option>
                  <option value="true">Enable</option>
                  <option value="false">Disable</option>
                </select>
              </div>
              {errors && errors.isDisabled?.message && (
                <span className="text-red-700">
                  {errors?.isDisabled?.message}
                </span>
              )}
            </>
          ) : (
            <div className="">
              <label htmlFor="">{item.title}</label>
              <input
                className="py-2 my-2 rounded-md"
                {...register(`${item.name}`)}
                type="text"
                placeholder={`Please Enter ${item.text}`}
              />
              {errors && (
                <span className="text-red-700">
                  {errors[item.name]?.message}
                </span>
              )}
              <span></span>
            </div>
          )
        )}
        <div className="text-center mt-5">
          <button
            className="bg-white px-7 py-2 rounded-md hover:bg-black hover:text-white"
            // disabled={!isSubmittable}
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
