import React from 'react';
const crossProducts = [
  {name:'Gel Conductor Facial', price:'€14,90', img:'assets/gel-conductor.jpg'},
  {name:'Mascarilla de Colágeno', price:'€24,90', img:'assets/mascarilla-colageno.jpg'},
  {name:'Set Skincare Coreano', price:'€59,90', img:'assets/set-skincare.jpg'},
  {name:'Masajeador Ojos LED', price:'€39,90', img:'assets/masajeador-ojos.jpg'},
];
const CrossSellProducts = () => (
  <section className='venta-cruzada'>
    <h2>Productos que complementan tu compra</h2>
    <div className='cross-slider-container'>
      {crossProducts.map((p,i)=>(
        <div className='cross-product-card' key={i}>
          <img src={p.img} alt={p.name} />
          <h3>{p.name}</h3>
          <span className='price'>{p.price}</span>
        </div>
      ))}
    </div>
  </section>
);
export default CrossSellProducts;


