import React from "react";

const PremiumPricing = () => {
  return (
    <div className="container mx-auto border border-green-200">
      <div className="text-center mb-10 flex flex-col justify-center items-center gap-4">
        <h2 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-base font-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex gap-4 items-center bg-gray-100 rounded-full p-1">
          <button className="btn btn-ghost text-base rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-white">
            Products
          </button>
          <button className="btn btn-ghost text-base rounded-full">
            Cart (2)
          </button>
        </div>
      </div>
      {
        // conditional randering
      }
    </div>
  );
};

export default PremiumPricing;
