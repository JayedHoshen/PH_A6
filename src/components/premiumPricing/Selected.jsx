import React from "react";

const Selected = ({ product, handleDeleteSelectedProduct }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center p-3 bg-gray-100 rounded-xl shadow-sm">
      <div className="flex gap-4">
        <img src={product.icon} alt={product.name} />
        <div>
          <h4 className="font-semibold text-lg">{product.name}</h4>
          <p className="text-base">${product.price}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteSelectedProduct(product)}
        className="btn btn-error btn-outline"
      >
        Remove
      </button>
    </div>
  );
};

export default Selected;
