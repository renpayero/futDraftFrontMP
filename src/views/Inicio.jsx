import React from 'react'
import { productos } from '../data/productos.js'
import Producto  from '../components/Producto.jsx'
import useProductos from '../hooks/useProductos.js'

export default function Inicio() {
  
  const { autenticado } = useProductos()
  console.log(autenticado)
  return (
    <>
      <h1 className='text-4xl front-black'>Inicio</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuación
      </p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {productos.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
