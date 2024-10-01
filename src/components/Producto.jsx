import React from 'react'
import useProductos from '../hooks/useProductos';

export default function Producto({producto, user}) {
    const {nombre, precio, imagen} = producto;
    const { handleClickModal, handleSetProducto } = useProductos();
    const is_admin = user?.is_admin;
    
  return (
    <div className="border p-3 shadow bg-white cursor-pointer">
      <img
        className="w-full"
        src={`/img/${imagen}.jpg`}
        alt={`imagen de ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl front-bold">{nombre}</h3>
        <p className="mt-5 front-black text-4xl text-blue-500">${precio}</p>
        {!is_admin && (
          <div>
            <button
              type="button"
              className="bg-blue-500 text-white w-full mt-5 p-2 rounded hover:bg-blue-700 font-bold uppercase"
              onClick={() => {
                handleClickModal();
                handleSetProducto(producto); 
              }}
            >
              Agregar al carrito
            </button>
          </div>
        )}
        {is_admin && (
          <div>
            <button
              type="button"
              className="bg-red-500 text-white w-full mt-5 p-2 rounded hover:bg-red-700 font-bold uppercase"
            >
              Eliminar
            </button>
            <button
              type="button"
              className="bg-green-500 text-white w-full mt-5 p-2 rounded hover:bg-green-700 font-bold uppercase"
            >
              Editar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
