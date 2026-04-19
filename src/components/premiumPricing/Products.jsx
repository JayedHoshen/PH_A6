import React from "react";
import { FaCheck } from "react-icons/fa";

const Products = ({ productData }) => {
  console.log(productData);
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col p-7 space-y-4 bg-gray-100 hover:bg-gray-50 rounded-2xl shadow">
        <div className="flex-1">
          <h4 className="text-bold text-2xl text-[#101727]">Starter</h4>
          <p className="text-base text-[#627382]">
            Perfect for getting started
          </p>
          <div className="my-6">
            <span className="font-bold text-[40px] text-[#101727]">$0</span>{" "}
            <span className="text-base text-[#627382]">/ Month</span>
          </div>
          <ul className="space-y-2 text-base text-[#627382]">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Access to 10 free tools</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Basic templates</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Community support</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>1 project per month</span>
            </li>
          </ul>
        </div>
        <button className="btn text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-base">
          Get Started Free
        </button>
      </div>
      <div className="flex flex-col text-white p-7 space-y-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l rounded-2xl shadow-xl relative">
        <p className="bg-[#FEF3C6] text-[#BB4D00] py-2 px-4 rounded-full absolute -top-5 left-1/2 -translate-x-1/2 hover:text-black hover:bg-[#dad6f7]">
          Most Popular
        </p>
        <div className="flex-1">
          <h4 className="text-bold text-2xl">Pro</h4>
          <p className="text-base">Best for professionals</p>
          <div className="my-6">
            <span className="font-bold text-[40px]">$29</span>{" "}
            <span className="text-base">/ Month</span>
          </div>
          <ul className="space-y-2 text-base">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Access to all premium tools</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Unlimited templates</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Priority support</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Unlimited projects</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Cloud sync</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-white"></FaCheck>
              <span>Advanced analytics</span>
            </li>
          </ul>
        </div>
        <button className="btn bg-white text-[#9514FA] text-base w-full rounded-full">
          Start Pro Trial
        </button>
      </div>
      <div className="flex flex-col p-7 space-y-4 bg-gray-100 hover:bg-gray-50 rounded-2xl shadow">
        <div className="flex-1">
          <h4 className="text-bold text-2xl text-[#101727]">Enterprise</h4>
          <p className="text-base text-[#627382]">For teams and businesses</p>
          <div className="my-6">
            <span className="font-bold text-[40px] text-[#101727]">$99</span>{" "}
            <span className="text-base text-[#627382]">/ Month</span>
          </div>
          <ul className="space-y-2 text-base text-[#627382]">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Everything in Pro</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Team collaboration</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Custom integrations</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Dedicated support</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>SLA guarantee</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-green-600"></FaCheck>
              <span>Custom branding</span>
            </li>
          </ul>
        </div>
        <button className="btn text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-base">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default Products;
