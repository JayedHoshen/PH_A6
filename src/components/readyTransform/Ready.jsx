import React from "react";

const Ready = () => {
  return (
    <div className="container mx-auto space-y-4 text-white text-center">
      <h2 className="font-extrabold text-[40px]">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-base leading-7 text-white/80">
        Join thousands of professionals who are already using Digitools to work
        smarter. <br /> Start your free trial today.
      </p>
      <div className="flex gap-4 justify-center items-center">
        <button className="btn text-base text-[#4F39F6] font-semibold rounded-full">
          Explore Products
        </button>
        <button className="btn btn-ghost text-base btn-outline rounded-full">
          View Pricing
        </button>
      </div>
      <p className="text-white/80 text-base">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Ready;
