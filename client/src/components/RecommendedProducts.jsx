import React from 'react';
const products = [
  {name:'Masajeador Ojos LED', price:'€39,90', img:'assets/producto1.jpg'},
  {name:'Gel Conductor Facial', price:'€14,90', img:'assets/producto2.jpg'},
  {name:'Mascarilla de Colágeno', price:'€24,90', img:'assets/producto3.jpg'},
  {name:'Set Skincare Coreano', price:'€59,90', img:'assets/producto4.jpg'},
];
const RecommendedProducts = () => (
  <section className='venta-dirigida'>
    <h2>También te puede interesar</h2>
    <div className='slider-container'>
      {products.map((p,i)=>(
        <div className='product-card' key={i}>
          <img src={p.img} alt={p.name} />
          <h3>{p.name}</h3>
          <span className='price'>{p.price}</span>
        </div>
      ))}
    </div>
  </section>
);
export default RecommendedProducts;


