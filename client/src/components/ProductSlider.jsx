import React, { useState } from 'react';
////# import '../styles/product.css';
const ProductSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className='slider'>
      <img src={images[index]} alt='producto' width='200' />
      <div>
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>??</button>
        <button onClick={() => setIndex((index + 1) % images.length)}>??</button>
      </div>
    </div>
  );
};
export default ProductSlider;


