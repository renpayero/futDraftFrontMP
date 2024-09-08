import React from 'react'
import useProductos from '../hooks/useProductos'
import ResumenProducto from './ResumenProducto'

export default function Resumen() {

  const { pedido, total, handleSumbitNuevaOrden } = useProductos()

  const comprobarPedido = () => pedido.length === 0

  const handleSumbit = e => {
    e.preventDefault()
    handleSumbitNuevaOrden()
  }

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
        <span className='font-bold'>$ {total}</span>
      </p>
      <form 
        className='w-full'
        onSubmit={handleSumbit}
      >
        <div className='mt-5'>
            <input
              type="submit"
              className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-blue-500 hover:bg-blue-800'} w-full p-2 text-white uppercase font-bold rounded cursor-pointer`}
              value='Realizar Pedido'
              disabled={comprobarPedido()}
            />
        </div>
      </form>
    </aside>
  )
}
