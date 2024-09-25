import React from 'react'
import Producto  from '../components/Producto.jsx'
import useProductos from '../hooks/useProductos.js'
import useSWR from 'swr'
import clienteAxios from '../config/axios.js'
import { useAuth } from '../hooks/useAuth.js'


export default function Productos() {
    const { categoriaActual } = useProductos()
    const { user } = useAuth({ middleware: 'auth' });

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
        

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full'>
          {productos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
              user={user}
            />
          )
          )}

<div className="flex flex-col items-center justify-center min-h-screen">

    <div className="relative w-64 h-64 bg-purple-900 hover:bg-purple-600 rounded-lg shadow-lg overflow-hidden ">

        <div className="absolute inset-0 bg-cover bg-center opacity-75 "></div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white cursor-pointer">

            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5v14m-7-7h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>

            <p className="text-lg font-medium">Crear Producto</p>
        </div>
    </div>
</div>
        </div>
      </>
    )
}
