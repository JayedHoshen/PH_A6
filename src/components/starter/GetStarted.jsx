import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import startImg from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="container mx-auto">
      <div className="space-y-4 mb-10 text-center">
        <h2 className="font-extrabold text-5xl text-[#101727]">
          Get Started in 3 Steps
        </h2>
        <p className="text-base font-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className=" p-7 space-y-4 bg-white hover:bg-gray-50 rounded-2xl shadow-xl text-center">
          <p className="text-right mb-2 animate-pulse">
            <span className="btn btn-circle text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              01
            </span>
          </p>
          <div className="mx-auto h-25 w-25 rounded-full bg-gray-200 flex justify-center items-center">
            <img src={userImg} alt="User" />
          </div>
          <h4 className="font-bold text-2xl text-[#101727]">Create Account</h4>
          <p className="text-lg text-[#627382] mb-12">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className=" p-7 space-y-4 bg-white hover:bg-gray-50 rounded-2xl shadow-xl text-center">
          <p className="text-right mb-2 animate-pulse">
            <span className="btn btn-circle text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              02
            </span>
          </p>
          <div className="mx-auto h-25 w-25 rounded-full bg-gray-200 flex justify-center items-center">
            <img src={packageImg} alt="Package" />
          </div>
          <h4 className="font-bold text-2xl text-[#101727]">Choose Products</h4>
          <p className="text-lg text-[#627382] mb-12">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className=" p-7 space-y-4 bg-white hover:bg-gray-50 rounded-2xl shadow-xl text-center">
          <p className="text-right mb-2 animate-pulse">
            <span className="btn btn-circle text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              03
            </span>
          </p>
          <div className="mx-auto h-25 w-25 rounded-full bg-gray-200 flex justify-center items-center">
            <img src={startImg} alt="User" />
          </div>
          <h4 className="font-bold text-2xl text-[#101727]">Start Creating</h4>
          <p className="text-lg text-[#627382] mb-12">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
