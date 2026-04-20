import React from "react";
import Product from "./Product";

const Products = ({ productData }) => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {productData.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
