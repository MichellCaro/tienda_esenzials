import React from "react";
import Header from "./Header";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
import Testimonials from "./Testimonials";
import RelatedProducts from "./RelatedProducts";
import CrossSell from "./CrossSell";

import "../styles/product.css";
import "../styles/style.css";

const ProductPage = () => {
  return (
    <>
      <Header />

      <section className="product-section">
        <div className="product-container">
          <ProductSlider
            images={[
              "/assets/masajeador-facial-led.png",
              "/assets/7-luces-led.png",
              "/assets/uso-multifuncional.png",
              "/assets/masajeador-lineas-finas.png",
              "/assets/llevalo en tu bolso.png",
            ]}
          />
          <ProductInfo />
        </div>
      </section>

      <Testimonials />
      <RelatedProducts />
      <CrossSell />
    </>
  );
};

export default ProductPage;

