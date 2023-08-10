import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useAuthState } from '../../../state/AuthContext'; // Adjust the path as needed
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import Link from 'next/link';

interface LoginData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { login } = useAuthState(); // Use the login function from context
  const formMethods = useForm<LoginData>();
  const { register, handleSubmit, formState } = formMethods;
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      await login(data.username, data.password); // Use the context login function
      // Redirect logic here
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <FormProvider {...formMethods}>
      <div className="min-w-[390px] sm-md:w-3/4 md:w-3/4 lg:w-3/4 flex flex-col items-center mb-8">
        <form onSubmit={handleSubmit(onSubmit)} className="text-center w-3/4">
          <input
            {...register('username', { required: true })}
            type="text"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <div className="relative">
            <input
              {...register('password', { required: true })}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 text-gray-600">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button className="bg-blue-500 text-white py-3 rounded-lg font-bold text-xl hover:bg-blue-600 shadow appearance-none border w-full leading-tight focus:outline-none focus:shadow-outline">
            Login
          </button>
        </form>
        <p className="text-center my-8 text-gray-700">
            <b>
          Or log in with:
          </b>
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="google-button p-6 bg-red-500 text-white py-2 rounded-lg shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline">
            <FaGoogle />
          </button>
          <button className="facebook-button p-6 bg-blue-600 text-white py-2 rounded-lg shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline">
            <FaFacebook />
          </button>
          <button className="apple-button p-6 bg-black text-white py-2 rounded-lg shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline">
            <FaApple />
          </button>
        </div>
        <b>
        <p className="text-center mt-4 text-gray-700">
          Don’t have an Account?{' '}
          <Link href="/register" className="text-blue-500 hover:underline">
            Create your account
          </Link>
        </p>
        </b>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
