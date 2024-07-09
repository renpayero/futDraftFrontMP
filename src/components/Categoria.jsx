import React from "react";
import { categorias } from "../data/categorias.js";
import useProductos from "../hooks/useProductos.js";

export default function Categoria(categoria) {
    const { handleClickCategoria, categoriaActual } = useProductos();
    const { icono, nombre, id} = categoria.categoria;

    const resaltarCategoriaActual = () => { 
        return categoriaActual.id == id ? "bg-blue-800" : 'bg-white';
    }


  return (
    <div 
        onClick={() => handleClickCategoria(id)}
        className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-blue-600 cursor-pointer rounded`}
      >
      <img
        src={`/img/icono_${icono}.svg`}
        alt={icono}
        className="w-12 h-12"
      />
        <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  );
}
