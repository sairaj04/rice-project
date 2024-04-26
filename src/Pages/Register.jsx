import React, { useState } from "react";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your registration logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Proceed with registration
      console.log("Registration successful!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-md w-[400px]"
      >
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-bold mb-2"
          >
            User Name*
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
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email*
          </label>
          <input
            type="email"
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
            Password*
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <h6>
            <input type="checkbox" className="mr-1" />
            Your Personal data will be used to Support your experience
            throughout this website,to manage access to your account,and for
            other purposes described in our privacy policy.
          </h6>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 w-full mt-6"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
