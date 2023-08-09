// src/components/auth/RegisterForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRegister } from '../../hooks/UseRegister'; 

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterData>();
  const registerMutation = useRegister();

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    try {
      await registerMutation.mutateAsync(data);
      // Redirect to dashboard or other page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center w-3/4">
      <input
        {...register('name', { required: true })}
        type="text"
        placeholder="Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="Email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <input
        {...register('password', { required: true })}
        type="password"
        placeholder="Password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
      />
      <button className="bg-blue-500 text-white py-3 rounded-lg font-bold text-xl hover:bg-blue-600 shadow appearance-none border w-full leading-tight focus:outline-none focus:shadow-outline">
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
