import React from "react";
import bannerImg from "../../assets/banner.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="hero bg-white">
        <div className="hero-content flex-col lg:flex-row gap-15">
          <div className="space-y-4">
            <p className="badge text-sm sm:text-lg font-medium bg-blue-100 rounded-full p-5 text-[#4F39F6]">
              <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4F39F6] opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-[#4F39F6]"></span>
              </span>
              New: AI-Powered Tools Available
            </p>
            <h1 className="lg:leading-22 text-4xl lg:text-7xl font-extrabold text-[#101727]">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-lg leading-7 text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today. <br /> Explore Products
            </p>
            <div className="flex gap-4 items-center">
              <button className="btn text-base text-white font-semibold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l">
                Get Started
              </button>
              <button className="btn btn-primary text-base btn-outline rounded-full">
                <CiPlay1 className="text-xl"></CiPlay1>
                Watch Demo
              </button>
            </div>
          </div>
          <img src={bannerImg} className="w-full rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
