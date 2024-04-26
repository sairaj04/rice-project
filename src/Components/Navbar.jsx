import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import userStore from "../store/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const { user, setUser } = userStore((state) => state);

  const locations = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const categories = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-[#67004E] w-screen p-6 flex items-center justify-between ">
      <div className="flex flex-row items-center gap-5 text-white">
        <span className="font-bold text-lg">
          <Link to="/">Rice App</Link>
        </span>
        <Select options={locations} placeholder="Location" />
      </div>
      <div className="flex items-center gap-8">
        <Select options={categories} placeholder="Categories" />
        <div className="text-white">
          <Link to="/cart">Cart</Link>
        </div>
        {user ? (
          <button
            className="text-white cursor-pointer bg-red-500 p-2 rounded"
            onClick={handleLogout}
          >
            ({user.email}) Logout
          </button>
        ) : (
          <div className="text-white cursor-pointer">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
