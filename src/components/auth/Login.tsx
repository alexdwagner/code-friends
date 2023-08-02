import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

const loginUser = async ({ username, password }: { username: string, password: string }) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const mutation = useMutation(loginUser, {
    onSuccess: () => {
      router.push('/posts');
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
<div className="bg-white p-6 rounded-lg shadow-xl border border-gray-300 hover:shadow-2xl transition duration-300 mb-4 w-full max-w-md mx-auto mt-8 md:w-1/2 lg:w-3/4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-3xl lg:text-4xl">Join Codefriends</h2>
        <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left md:text-lg lg:text-xl">
            Codefriends is a community for coders to connect and collaborate. Discover new projects, find mentorship, or simply network with like-minded individuals. 
        </p>    
        <p className="mb-4 text-gray-700 text-center md:text-left lg:text-left italic md:text-lg lg:text-xl">
            Create an account and find your next mentor(or mentee) today!
        </p>
        <hr className="w-full border-t border-gray-200 my-4" />
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left lg:text-left md:text-2xl lg:text-3xl">
            Login
        </h3>
        <form onSubmit={handleSubmit} className="text-center w-full">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:text-base lg:text-lg" htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 md:text-base lg:text-lg" htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
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
);
  };

export default Login;
