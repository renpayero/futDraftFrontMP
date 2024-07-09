import React from "react";
import useProductos from "../hooks/useProductos";

export default function ModalProducto() {
  const { handleClickModal, producto } = useProductos();
  return (
    <div className="md:flex gap-10">

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