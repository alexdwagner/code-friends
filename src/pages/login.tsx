// pages/login.tsx
import React from 'react';

function LoginPage() {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
