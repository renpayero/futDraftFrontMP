import React from "react";
import { categorias } from "../data/categorias.js";

export default function Categoria(categoria) {
    const { icono, nombre} = categoria.categoria;
  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-blue-600 cursor-pointer rounded">
      <img
        src={`/img/icono_${icono}.svg`}
        alt={icono}
        className="w-12 h-12"
      />
        <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  );
}
