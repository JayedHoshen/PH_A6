import React from "react";
import { FaCheck } from "react-icons/fa";

const Product = ({ product }) => {
  const { name, description, price, period, tagType, features, icon } = product;
  return (
    <div className="flex flex-col p-7 space-y-4 bg-gray-100 hover:bg-gray-50 rounded-2xl shadow relative">
      <p
        className={`badge ${tagType === "popular" ? "badge-warning" : tagType === "new" ? "badge-neutral" : "badge-success"} absolute top-3 right-3`}
      >
        {tagType}
      </p>
      <div
        className={`w-15 h-15 rounded-full border-2 border-[#e7e5e5] flex justify-center items-center`}
      >
        <img src={icon} alt={name} />
      </div>
      <div className="flex-1 space-y-2">
        <h4 className="text-bold text-2xl text-[#101727]">{name}</h4>
        <p className="text-base text-[#627382]">{description}</p>
        <div className="my-6">
          <span className="font-bold text-[40px] text-[#101727]">{price}</span>{" "}
          <span className="text-base text-[#627382]">/ {period}</span>
        </div>
        <ul className="space-y-2 text-base text-[#627382]">
          {features.map((feature, index) => (
            <li className="flex gap-2 items-center" key={index}>
              <FaCheck className="text-green-600"></FaCheck>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-base">
        Buy Now
      </button>
    </div>
  );
};

export default Product;
