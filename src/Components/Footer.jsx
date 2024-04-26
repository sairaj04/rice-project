import React from "react";
import footer from "../assets/footer.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:w-1/3">
            <p className="text-lg mb-4">
              $10 discount for your first order
              <span className="font-bold">
                {" "}
                Join our newsletter and get... <br />
              </span>
            </p>
            <h6>
              {" "}
              Join our Email Subscription now to get updates on promotions and
              coupons{" "}
            </h6>
            <div className="relative inline-block mt-6">
              <input
                type="email"
                className="py-2 px-4 border border-gray-300 rounded-l focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 py-2 px-2 bg-blue-500 text-white rounded-r focus:outline-none rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
          <img src={footer} alt="" />
        </div>
        <div
          className="
        grid grid-cols-5 gap-4 mt-8
        "
        >
          <div className="max-w-sm mx-auto col-span-2 mr-10">
            <textarea
              className="block w-full max-full mt-6 p-4 border rounded-lg "
              placeholder="Enter your message..."
            ></textarea>
            <p className="mt-2 p-4 mx-auto">
              Your Personal Data will be used to support Your experience
              throught this website,to manage access to your account,and for
              other purpouses described in our
            </p>
          </div>
          <div className="mb-8 md:w-1/3">
            <p className="text-lg mb-4">Explore</p>
            <p>About Us</p>
            <p>Products</p>
            <p>Category</p>
          </div>
          <div className="mb-8 md:w-1/3">
            <p className="text-lg mb-4 whitespace-nowrap">Contact Us</p>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="mb-8">
            <p className="text-lg mb-4 whitespace-nowrap">Stay Connected</p>
            <div className="flex gap-4">
              <FaInstagram className="w-8 h-8 cursor-pointer" />
              <AiOutlineYoutube className="w-8 h-8 cursor-pointer" />
              <FaXTwitter className="w-8 h-8 cursor-pointer" />
              <FaFacebookMessenger className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <div className="text-center">
        <p>&copy; 2024 RiceProject</p>
      </div>
    </footer>
  );
}

export default Footer;
