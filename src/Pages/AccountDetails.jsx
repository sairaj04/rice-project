import React, { useState } from "react";

const AccountDetailsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save changes here
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-row space-x-4">
        <h1 className="text-3xl font-bold mb-4 cursor-pointer transition duration-300 hover:underline">
          Account Details
        </h1>
        <h1 className="text-3xl font-bold mb-4 cursor-pointer transition duration-300 hover:underline">
          Orders
        </h1>
        <h1 className="text-3xl font-bold mb-4 cursor-pointer transition duration-300 hover:underline">
          Address
        </h1>
        <h1 className="text-3xl font-bold mb-4 cursor-pointer transition duration-300 hover:underline">
          Wishlist
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block font-bold mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block font-bold mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Password Change</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block font-bold mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block font-bold mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-bold mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsPage;
