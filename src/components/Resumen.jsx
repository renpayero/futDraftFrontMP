import React from 'react'
import useProductos from '../hooks/useProductos'
import ResumenProducto from './ResumenProducto'

export default function Resumen() {

  const { pedido } = useProductos()

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5 '>
      <h1 className='text-4xl'>
        Mi Pedido
      </h1>
      <p className='text-lg my-5'>
        Aquí podrás encontrar los productos de tu pedido
      </p>
      <div className='py-10'>
        {pedido.length === 0 ? (
          <p className='text-center text-2xl'> No hay productos en el pedido</p>
          ) : (
            pedido.map(producto => (
              <ResumenProducto
                key={producto.id} 
                producto={producto}
              />
            )
          )
          )}
      </div>
      <p className='text-xl mt-10'>
        Total a pagar: {""}
      </p>
      <form className='w-full'>
        <div className='mt-5'>
            <input
              type="submit"
              className='bg-blue-500 w-full p-2 text-white uppercase font-bold hover:bg-blue-700 rounded cursor-pointer'
              value='Realizar Pedido'
            />
        </div>
      </form>
    </aside>
  )
}
