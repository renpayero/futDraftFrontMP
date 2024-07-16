import React from "react";
import useProductos from "../hooks/useProductos";
import {useState} from "react";

export default function ModalProducto() {
  const { handleClickModal, producto, handleAgregarProducto } = useProductos();
  const [cantidad, setCantidad] = useState(1);


  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          alt={`Imagen producto ${producto.nombre}`}
          src={`img/${producto.imagen}.jpg`}
        ></img>
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
            <button onClick={handleClickModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
          <h1 className="text-3xl font-bold mt-5">
            {producto.nombre}
          </h1>
          <p className="mt-5 font-black text-5xl text-blue-500">
            {producto.precio}
          </p>
          <div className="flex gap-4 mt-5">
            <button
             type="button"
              onClick={() => 
                {
                  if (cantidad > 1) {
                    setCantidad(cantidad - 1);
                  }
                }
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <p className="text-3xl">
              {cantidad}
            </p>
            <button
              type="button"
              onClick={() => 
                {
                  if (cantidad < 9) {
                    setCantidad(cantidad + 1);
                }
            }
          }
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </button>
          </div>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
            onClick={() => handleAgregarProducto({...producto, cantidad})}
          >
            Agregar al carrito
          </button>
      </div>
    </div>
  );
}


{/* <p className="text-center text-2xl text-green-600 font-bold">
Producto Agregado!
</p>
<button
onClick={() => handleClickModal()}
className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700"
>
Cerrar
</button> */}