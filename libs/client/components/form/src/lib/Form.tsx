import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { formSchema, FormSchemaData } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { red } from '@mui/material/colors';
import TabOne from './Tabs/TabOne';
import TabThree from './Tabs/TabThree';
import TabTwo from './Tabs/TabTwo';
export const Form = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    fatherName: '',
    fatherNo: ''
  };

  const methods = useForm<FormSchemaData>({
    // resolver: zodResolver(formSchema),
    defaultValues: { ...initialState }
  });

  const onSubmit = (data: FormSchemaData) => {
    console.log(data);
  };
  const [tabState, setTabState] = React.useState<number>(0);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="font-signature flex h-screen items-center justify-center bg-gray-300 "
      >
        {tabState === 0 && <TabOne setTabState={setTabState} />}
        {tabState === 1 && <TabTwo setTabState={setTabState} />}
        {tabState === 2 && <TabThree setTabState={setTabState} />}
      </form>
    </FormProvider>
  );
};
