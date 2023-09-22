// import React from 'react';
// import { useForm, FormProvider, useFormContext } from 'react-hook-form';
// import { formSchema, FormSchemaData } from '../schema';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { red } from '@mui/material/colors';
// import TabOne from './Tabs/TabOne';
// import TabThree from './Tabs/TabThree';
// import TabTwo from './Tabs/TabTwo';
// export const Form = () => {
//   const initialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNo: '',
//     fatherName: '',
//     fatherNo: ''
//   };

//   const methods = useForm<FormSchemaData>({
//     // resolver: zodResolver(formSchema),
//     defaultValues: { ...initialState }
//   });

//   const onSubmit = (data: FormSchemaData) => {
//     console.log(data);
//   };
//   const [tabState, setTabState] = React.useState<number>(0);
//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="font-signature flex h-screen items-center justify-center bg-gray-300 "
//       >
//         {tabState === 0 && <TabOne setTabState={setTabState} />}
//         {tabState === 1 && <TabTwo setTabState={setTabState} />}
//         {tabState === 2 && <TabThree setTabState={setTabState} />}
//       </form>
//     </FormProvider>
//   );
// };

import { useForm, UseFormProps, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const validationSchema = z.object({
  posts: z.array(
    z.object({
      postId: z.string(),
      text: z.string().min(1, { message: 'Please Insert Text.' })
    })
  ),
  address: z.string().min(1, { message: 'Please Insert Address.' })
});

type Post = z.infer<typeof validationSchema>['posts'][number];

const postsInitial: Post[] = [
  { postId: '1', text: 'text 1' },
  { postId: '2', text: 'text 2' }
];

function useZodForm<TSchema extends z.ZodType>(
  props: Omit<UseFormProps<TSchema['_input']>, 'resolver'> & {
    schema: TSchema;
  }
) {
  const form = useForm<TSchema['_input']>({
    ...props,
    resolver: zodResolver(props.schema, undefined, {})
  });

  return form;
}

export const Form = () => {
  // assume this comes from backend
  const [posts, setPosts] = useState<Post[]>(() => postsInitial);

  const {
    handleSubmit,
    register,
    control,
    formState: { isValid, errors, isValidating, isDirty },
    reset
  } = useZodForm({
    schema: validationSchema,
    defaultValues: { posts },
    mode: 'onChange'
  });

  const { fields, append, remove } = useFieldArray({
    name: 'posts',
    control
  });

  const isSubmittable = !!isDirty && !!isValid;

  return (
    <div className="App bg-blue-50 text-blue-800">
      <div className="px-32 pt-16">
        <h2 className="text-xl font-bold">Posts data</h2>

        <ul className="mt-4 w-1/3 mx-auto list-disc">
          {posts.map((post) => (
            <li key={post.postId}>{post.text}</li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit((data) => {
          console.log('Data submitted:', data);

          // assume you'd send the request to your backend here
          setPosts(data.posts);

          /*
           * Reset the default values to our new data.
           * This is done to "set" the validation to the newly
           * updated values.
           * See: https://react-hook-form.com/api/useform/reset
           */
          reset(data);
        })}
        className="w-full space-y-6 px-32 py-16"
      >
        <h2 className="text-xl font-bold">Change the data</h2>

        {fields.map((field, index) => {
          const errorForField = errors?.posts?.[index]?.text;
          return (
            <div className="flex h-16 items-center" key={field.id}>
              <div className="w-1/4 p-2 h-full flex justify-end items-start">
                <p className="text-center">Post ID: {field.postId}</p>
              </div>

              <div className="w-2/4 my-32">
                <input
                  {...register(`posts.${index}.text` as const)}
                  placeholder="Enter a text.."
                  defaultValue={field.text}
                  className="border p-2 border-gray-300"
                />
                <p>{errorForField?.message ?? <>&nbsp;</>}</p>
              </div>

              <div className="w-1/4 h-full flex justify-start items-start">
                <button
                  type="button"
                  className="bg-blue-300 hover:bg-blue-400 rounded-lg p-2"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        <button
          type="button"
          className="block rounded-lg mx-auto bg-blue-300 hover:bg-blue-400 p-4"
          onClick={() =>
            append({
              postId: 'new',
              text: ''
            })
          }
        >
          Append
        </button>

        <div className=" h-32">
          <button
            disabled={!isSubmittable}
            type="submit"
            className="block rounded-lg w-32 cursor-pointer mx-auto bg-blue-300 hover:bg-blue-400 disabled:bg-orange-300 disabled:cursor-not-allowed p-4"
          >
            <p>Submit</p>
            {!isSubmittable && <p>(Disabled)</p>}
          </button>
        </div>

        <div className="w-full flex">
          <div className="w-1/2 space-y-4">
            <h3>is valid:</h3>
            <code>{isValid + ''}</code>

            <h3>is dirty:</h3>
            <code>{isDirty + ''}</code>

            <h3>is validating:</h3>
            <code>{isValidating + ''}</code>
          </div>

          <div className="w-1/2">
            <h3>Last submitted values:</h3>
            <code>{JSON.stringify(posts)}</code>
          </div>
        </div>
      </form>
    </div>
  );
};
