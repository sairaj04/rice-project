import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-900 mt-1 w-[1919px] h-[92px] px-[515px] flex items-center justify-between ">
      <div className="text-white">Location</div>
      <div className="flex items-center gap-8">
        <div className="text-white">Home</div>
        <div className="text-white">Category</div>
        <div className="text-white">Cart</div>
        <div className="text-white">Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
