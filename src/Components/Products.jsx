import React from "react";
import ricebag from "../assets/ricebag.png";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";

function Products() {
  return (
    <>
      <div className="relative">
        <h1 className="absolute top-0 left-10 text-2xl mt-2 mr-4">Korralu</h1>
        <br />
        <div className="flex justify-center mt-6">
          <MdOutlineArrowCircleLeft className="absolute left-10 top-1/2 transform -translate-y-1/2 text-4xl" />
          <div className="flex flex-row items-center m-2">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="w-40 bg-white shadow-md p-4 rounded-lg m-2"
              >
                <div className="relative">
                  <img
                    src={ricebag}
                    alt="Rice"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  {/* <img
                src={wishlistIcon}
                alt="Wishlist"
                className="absolute top-2 right-2 w-6"
              /> */}
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm">HMT Rice</p>
                <div className="flex justify-between mt-2">
                  <button className="px-1 py-1 bg-gray-200 rounded-sm m-1">
                    10kgs
                  </button>
                  <button className="px-1 py-1 bg-gray-200 rounded-sm m-1">
                    25kgs
                  </button>
                </div>
                <p className="mt-2">$22-$60</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <MdOutlineArrowCircleRight className="absolute right-10 top-1/2 transform -translate-y-1/2 text-4xl" />
        </div>
      </div>
      <div className="relative">
        <h1 className="absolute top-0 left-10 text-2xl mt-2 mr-4">Basmati</h1>
        <br />
        <div className="flex justify-center mt-6">
          <MdOutlineArrowCircleLeft className="absolute left-10 top-1/2 transform -translate-y-1/2 text-4xl" />
          <div className="flex flex-row items-center m-2">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="w-40 bg-white shadow-md p-4 rounded-lg m-2"
              >
                <div className="relative">
                  <img
                    src={ricebag}
                    alt="Rice"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  {/* <img
                src={wishlistIcon}
                alt="Wishlist"
                className="absolute top-2 right-2 w-6"
              /> */}
                </div>
                <hr className="my-2 border-gray-300" />
                <p className="text-sm">HMT Rice</p>
                <div className="flex justify-between mt-2">
                  <button className="px-1 py-1 bg-gray-200 rounded-sm m-1">
                    10kgs
                  </button>
                  <button className="px-1 py-1 bg-gray-200 rounded-sm m-1">
                    25kgs
                  </button>
                </div>
                <p className="mt-2">$22-$60</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <MdOutlineArrowCircleRight className="absolute right-10 top-1/2 transform -translate-y-1/2 text-4xl" />
        </div>
      </div>
    </>
  );
}

export default Products;
