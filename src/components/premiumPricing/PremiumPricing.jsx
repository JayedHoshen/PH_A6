import React, { use, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const PremiumPricing = ({
  productPromise,
  selectedProduct,
  setSelectedProduct,
}) => {
  const [productStatus, setProductStatus] = useState("product");

  const productData = use(productPromise);

  return (
    <div className="container mx-auto">
      <div className="text-center mb-10 flex flex-col justify-center items-center gap-4">
        <h2 className="font-extrabold text-5xl text-[#101727]">
          Premium Digital Tools
        </h2>
        <p className="text-base font-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex gap-2 items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setProductStatus("product")}
            className={`btn btn-ghost text-base rounded-full ${productStatus === "product" ? "bg-linear-to-r text-white" : ""} from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l`}
          >
            Products
          </button>
          <button
            onClick={() => setProductStatus("cart")}
            className={`btn btn-ghost text-base rounded-full ${productStatus === "cart" ? "bg-linear-to-r text-white" : ""} from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l`}
          >
            Cart ({selectedProduct.length})
          </button>
        </div>
      </div>
      {productStatus === "product" ? (
        <Products
          productData={productData}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        ></Products>
      ) : (
        <Cart
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        ></Cart>
      )}
    </div>
  );
};

export default PremiumPricing;
