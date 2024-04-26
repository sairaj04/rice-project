import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import userStore from "../store/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = userStore();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-gray-100 p-8 rounded-lg shadow-md w-[400px]"
      >
        <div className="mb-10">
          <Link
            to="/login"
            className="bg-transparent hover:border-b-2 border-b-gray-700 text-gray-900 font-bold py-2 px-4 focus:outline-none  mx-8"
          >
            Login
          </Link>
          <Link
            className="bg-transparent hover:border-b-2 border-b-gray-700 text-gray-500 font-bold py-2 px-4 focus:outline-none mx-8"
            to="/register"
          >
            Register
          </Link>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      </form>
    </div>
  );
};

export default LoginPage;
