import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Perform your login logic here
    if (username === "example" && password === "password") {
      // Redirect to dashboard or perform any other action upon successful login
      console.log("Login successful!");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-[400px]">
        <button className="bg-transparent hover:bg-gray-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 mx-8">
          Login
        </button>
        <button className="bg-transparent hover:bg-gray-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 mx-8">
          Register
        </button>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </a>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
