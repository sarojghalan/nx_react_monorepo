import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TAB_ONE {
  setTabState: (state: number) => void;
}

const TabOne = ({ setTabState }: TAB_ONE) => {
  const { register } = useFormContext();
  return (
    <div className="bg-black p-10 text-white rounded text-center">
      <p>Personal Information</p>
      <div className="leading-tight">
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
      <div className="text-center bg-red-950 mx-6 text-white">
        <button onClick={() => setTabState(1)}>next</button>
      </div>
    </div>
  );
};

export default TabOne;
