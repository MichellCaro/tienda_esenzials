import React, { useState } from "react";
import api from "../services/api";
function AddProductForm({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/products", { name, price: parseFloat(price) });
      onProductAdded(res.data);
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
export default AddProductForm;


