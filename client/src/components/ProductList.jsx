import React, { useEffect, useState } from "react";
import api from "../services/api";
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;


