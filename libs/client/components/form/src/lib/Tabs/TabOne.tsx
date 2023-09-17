import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TAB_ONE {
  setTabState: (state: number) => void;
}

const TabOne = ({ setTabState }: TAB_ONE) => {
  const { register } = useFormContext();
  return (
    <div>
      <p>Personal Information</p>
      <div>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          placeholder="enter your first name here ... "
          {...register('firstName')}
        />
      </div>
      <div>
        <label htmlFor="lastName">First Name : </label>
        <input
          type="text"
          placeholder="enter your last name here ... "
          {...register('lastName')}
        />
      </div>
      <button onClick={() => setTabState(1)}>next</button>
    </div>
  );
};

export default TabOne;
