import React from "react";
import { useState } from "react";
import useProductos from "../hooks/useProductos";

export default function ModalAgregarProducto() {
  const { handleCrearProducto } = useProductos();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria_id, setCategoriaId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const productoNuevo = {
      nombre,
      precio,
      imagen,
      categoria_id,
    }
    handleCrearProducto(productoNuevo);
  };
  return (
    //modal que se abrira a clickear en Crear Producto y permitira agregar un nuevo producto con nombre, precio e imagen
    <div className="md:flex gap-10">
      <div className="">
        
        <form onSubmit={handleSubmit}>
          <p
          className="text-2xl font-bold text-gray-700 text-center"
          >CREAR NUEVO PRODUCTO</p>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-200 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Precio
            </label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-200 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Imagen
            </label>
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-200 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Categoría ID
            </label>
            <input
              type="number"
              value={categoria_id}
              onChange={(e) => setCategoriaId(e.target.value)}
              className="mt-1 block w-full border-2 border-gray-200 rounded p-2"
              required
            />
            <p>(1 - Indumentaria, 2 - Baloines , 3 - Botines, 4 - Guantes, 5 - canilleras, 6 - Accesorios)</p>
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
