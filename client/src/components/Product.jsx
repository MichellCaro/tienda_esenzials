import React from "react";
import ProductSlider from "./ProductSlider";
const Product = () => {
  const images = [
    "/images/product1.jpg",
    "/images/product2.jpg",
    "/images/product3.jpg",
  ];
  return (
    <div>
      <h2>Producto Destacado</h2>
      <ProductSlider images={images} />
    </div>
  );
};
export default Product;


