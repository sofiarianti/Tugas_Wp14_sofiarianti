import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '12345' && password === '12345') {
      onLogin();
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Login Form */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center mb-4">
        <span
            className="text-2xl font-semibold text-green-800 px-2 rounded"
            style={{
              fontFamily: 'Pristina, sans-serif',
              backgroundColor: 'white',
            }}
          >
            Sipena
          </span>
        </div>

        <div className="px-10 py-10 text-left bg-gradient-to-b from-green-700/80 via-green-400/70 to-green-700/80 shadow-lg rounded-lg w-96 h-auto">
          <h3 className="text-2xl font-bold text-center text-black">
            Login ke Akun Anda
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block text-black" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Masukkan username"
                  id="username"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-black" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  id="password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 mt-4 text-black bg-blue-300 rounded-lg hover:bg-green-900 transition-colors duration-300"
                >
                  Login
                </button>
                <a href="#" className="text-sm text-white hover:underline">
                  Lupa password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
