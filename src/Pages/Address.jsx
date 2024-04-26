import React, { useState } from "react";

const ShippingAddress = () => {
  // State to store address details
  const [address, setAddress] = useState({
    address: "",
    building: "",
    town: "",
    city: "",
    pincode: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save changes here
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between border-b mb-4 pb-2">
        <h2 className="text-lg font-semibold">SHIPPING ADDRESS</h2>
        <button className="text-blue-500 underline">Edit</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={address.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Building</label>
          <input
            type="text"
            name="building"
            value={address.building}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label className="block mb-1 font-medium">Town</label>
            <input
              type="text"
              name="town"
              value={address.town}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={address.pincode}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
