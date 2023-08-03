import React from 'react';
import { useMutation } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { LoginData } from '../../../types';
import { FormProvider } from 'react-hook-form';
import Link from 'next/link';


const loginUser = async (data: LoginData) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
};

const Login: React.FC = () => {
    const formMethods = useForm<LoginData>();
    const { register, handleSubmit, formState } = formMethods;
    const { errors } = formState;

    const router = useRouter();

    const mutation = useMutation(loginUser, {
        onSuccess: () => {
            router.push('/posts');
        }
    });

    const onSubmit: SubmitHandler<LoginData> = data => {
        mutation.mutate(data);
    };
    return (
        <FormProvider {...formMethods}>
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300 mb-4 w-full max-w-md mx-auto mt-8 md:w-1/2 lg:w-3/4 flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Welcome to CodeFriends.</h2>
                <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left md:text-lg lg:text-xl">
                    <b>CodeFriends is a platform for coders to connect and collaborate.</b>
                </p>
                <div className="bg-orange-100 border border-orange-300 p-4 rounded-lg shadow-md">
                    <p className="mb-4 text-gray-700 text-left md:text-left lg:text-left md:text-lg lg:text-xl">
                        <b>Here you can:</b>
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Discover new projects</li>
                        <li>Find mentorship</li>
                        <li>Connect with like-minded individuals.</li>
                    </ul>
                </div>

                <br></br>
                <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left italic md:text-lg lg:text-xl">
                    Create an account and find your next mentor(or mentee) today. Or just
                    <Link href="/posts" className="text-blue-500 hover:underline">have a look around</Link>
                </p>

                <hr className="w-full border-t border-gray-200 my-4" />
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-2xl lg:text-3xl">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center w-full">
                    <div className="mb-4">
                        <input
                            {...register("username", { required: true })}
                            type="text"
                            placeholder="Username"
                            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.username && <p className="text-red-500">Username is required</p>}
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            placeholder="Password"
                            className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.password && <p className="text-red-500">Password is required</p>}
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                </form>
                {mutation.isLoading && <p className="text-blue-500 mt-4">Logging in...</p>}
                {mutation.isError ? <p className="text-red-500 mt-4">Error logging in: {(mutation.error as Error).message}</p> : null}
                {mutation.isSuccess && <p className="text-green-500 mt-4">Login successful! Redirecting...</p>}

                <div className="w-full text-center mt-4">
                    <div className="text-gray-600">OR</div>
                    <a href="/register" className="text-blue-500 hover:underline">Create your account</a>
                </div>
            </div>
        </FormProvider>
    );
};

export default Login;
