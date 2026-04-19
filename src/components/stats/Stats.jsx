import React from "react";

const Stats = () => {
  return (
    <div className="py-15 container mx-auto flex gap-8 flex-col lg:flex-row justify-around items-center">
      <div className="space-y-2">
        <h3 className="font-extrabold text-6xl text-white">50K+</h3>
        <p className="font-medium text-2xl text-white/80">Active Users</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-extrabold text-6xl text-white">200+</h3>
        <p className="font-medium text-2xl text-white/80">Premium Tools</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-extrabold text-6xl text-white">4.9</h3>
        <p className="font-medium text-2xl text-white/80">Rating</p>
      </div>
    </div>
  );
};

export default Stats;
