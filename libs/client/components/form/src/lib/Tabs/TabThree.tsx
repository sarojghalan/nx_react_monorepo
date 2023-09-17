import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchemaData } from '../../schema';

interface TAB_THREE {
  setTabState: (state: number) => void;
}

const TabThree = ({ setTabState }: TAB_THREE) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useFormContext();

  return (
    <div>
      <p>Family Information</p>
      <div>
        <label htmlFor="fatherName">Father Name : </label>
        <input
          type="text"
          placeholder="enter your father name here ... "
          {...register('fatherName')}
        />
      </div>
      <div>
        <label htmlFor="fatherNo">Father ph. no : </label>
        <input
          type="text"
          placeholder="enter your father number here ... "
          {...register('fatherNo')}
        />
      </div>
      <button onClick={() => setTabState(1)}>back</button>
      <button type="submit">Send</button>
    </div>
  );
};

export default TabThree;
