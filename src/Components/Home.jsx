import React from "react";
import ricebag from "../assets/ricebag.png";

function Home() {
  return (
    <>
      <div className="mt-6">
        <div className="flex justify-center items-center">
          <div className="flex-none mr-2">
            <img src={ricebag} alt="ricebag" className="w-32 h-auto" />
          </div>
          <div className="flex-none">
            <img src={ricebag} alt="ricebag" className="w-64 h-auto" />
          </div>
          <div className="flex-none ml-2">
            <img src={ricebag} alt="ricebag" className="w-32 h-auto" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="mt-6">Types of Products Available</h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Korralu</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Basmati</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Millets</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">BPT</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Brown Rice</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">HMT</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Black Rice</span>
        </div>
        <div className="flex flex-col">
          <button className="m-4 w-20 h-20 bg-black rounded"></button>
          <span className="text-center">Suguna</span>
        </div>
      </div>
    </>
  );
}

export default Home;
