import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TAB_TWO {
  setTabState: (state: number) => void;
}

const TabThree = ({ setTabState }: TAB_TWO) => {
  const { register } = useFormContext();
  return (
    <div>
      <p>Contact Information</p>
      <div>
        <label htmlFor="phoneNumber">Phone Number : </label>
        <input
          type="text"
          placeholder="enter your phone number here ... "
          {...register('phoneNumber')}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          placeholder="enter your email here ... "
          {...register('email')}
        />
      </div>

      <button onClick={() => setTabState(0)}>back</button>
      <button onClick={() => setTabState(2)}>next</button>
    </div>
  );
};

export default TabThree;
