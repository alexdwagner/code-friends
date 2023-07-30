import React, { useState } from 'react';
import { useRouter } from 'next/router';

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(username, password);
        setLoginSuccess(true);  // This should replaced by actual login logic. Line 17 and 18 should be clubbed together.
        setTimeout(() => {
            router.push('/posts');  // Redirect to posts page after a delay
        }, 1000);  // 1 second delay for demonstration purposes
    };

    return (
        <div className="bg-white p-6 rounded shadow-md border border-gray-200 hover:shadow-lg transition duration-300 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
            </form>
            {loginSuccess && <p className="text-green-500 mt-4">Login successful! Redirecting...</p>}
        </div>
    );
};

export default Login;
