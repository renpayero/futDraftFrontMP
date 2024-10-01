import React from "react";
import { useState } from "react";
import useProductos from "../hooks/useProductos";

export default function ModalAgregarProducto() {
  const { handleClickModalCrearProducto, handleCrearProducto } = useProductos();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria_id, setCategoriaId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCrearProducto({ nombre, precio, imagen, categoria_id });
  };
  return (
    //modal que se abrira a clickear en Crear Producto y permitira agregar un nuevo producto con nombre, precio e imagen
    <div className="md:flex gap-10">
      <div className="md:w-2/3">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Imagen
            </label>
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categoría ID
            </label>
            <input
              type="number"
              value={categoria_id}
              onChange={(e) => setCategoriaId(e.target.value)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
}
