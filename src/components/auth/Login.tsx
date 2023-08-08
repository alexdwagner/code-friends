import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { LoginData } from '../../../types';
import Link from 'next/link';

const Login: React.FC = () => {
  const formMethods = useForm<LoginData>();
  const { register, handleSubmit, formState } = formMethods;
  const { errors } = formState;

  const router = useRouter();

  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginData> = data => {
    signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    })
      .then(result => {
        if (result) {
          if (result.error) {
            setLoginError(result.error);
          } else {
            router.push('/posts');
          }
        } else {
          // Handle the case when result is undefined (e.g., set an error message)
          setLoginError('An unexpected error occurred during login.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

 return (
<FormProvider {...formMethods}>
    <div> 
      <hr className="w-full border-t border-gray-200 my-4" />
      <h3 className="text-xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-2xl lg:text-3xl">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center w-full">        <div className="mb-4">
          <input
            {...register('username', { required: true })}
            type="text"
            placeholder="Username"
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.username && <p className="text-red-500">Username is required</p>}
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password && <p className="text-red-500">Password is required</p>}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Login
        </button>
        </form>
      {loginError && <p className="text-red-500 mt-4">Error logging in: {loginError}</p>}
      <div className="w-full text-center mt-4">
        <div className="text-gray-600">OR</div>
        <a href="/register" className="text-blue-500 hover:underline">Create your account</a>
      </div>
    </div> 
  </FormProvider>
);
 };

export default Login;
