import React from 'react'
import { productos as data } from '../data/productos.js'
import Producto  from '../components/Producto.jsx'
import useProductos from '../hooks/useProductos.js'
import useSWR from 'swr'
import clienteAxios from '../config/axios.js'

export default function Inicio() {
  
  const { categoriaActual } = useProductos()

  //consulta SWR
  const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
  const { data, error, isLoading } = useSWR( '/api/productos', fetcher, { refreshInterval: 1000 } )
  
  if (isLoading) return 'Cargando...'


  const productos = data.data.filter (producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl front-black font-bold'>{categoriaActual.nombre}</h1>
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
