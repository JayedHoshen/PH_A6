import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Cart = () => {
  return (
    <div className="p-10 space-y-3 border border-gray-100 shadow-md rounded-xl">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      <div className="min-h-40 flex gap-4 flex-col justify-center items-center">
        <CiShoppingCart className="text-5xl text-[#4F39F6]"></CiShoppingCart>
        <p className="text-xl font-semibold">Your cart is empty</p>
      </div>
      <button className="btn text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l text-base">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
