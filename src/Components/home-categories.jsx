import React from "react";
import ricebag from "../assets/ricebag.png";

function Categories() {
  const productsAvailable = [
    {
      name: "Korralu",
      color: "#CEFFCD",
    },
    {
      name: "Basmati",
      color: "#D4CAFF",
    },
    {
      name: "Millets",
      color: "#CEFFCD",
    },
    {
      name: "BPT",
      color: "#FFCACA",
    },
    {
      name: "Brown Rice",
      color: "#A8FFEF",
    },
    {
      name: "HMT",
      color: "#D4CAFF",
    },
    {
      name: "Black Rice",
      color: "#CEFFCD",
    },
    {
      name: "Suguna",
      color: "#D4CAFF",
    },
  ];
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
        {productsAvailable.map((e, idx) => (
          <div key={idx} className="flex flex-col">
            <button
              style={{ backgroundColor: `${e.color}` }}
              className={`m-4 w-20 h-20 rounded`}
            ></button>
            <span className="text-center">{e.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
