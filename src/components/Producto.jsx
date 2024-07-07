import React from 'react'

export default function Producto(producto) {
    const {nombre, precio, imagen} = producto.producto;
    
  return (
    <div className='border p-3 shadow bg-white cursor-pointer'>
        <img 
            className='w-full'
            src={`/img/${imagen}.jpg`} 
            alt={`imagen de ${nombre}`} 
        />
        <div className='p-5'>
            <h3 className='text-2xl front-bold'>
                {nombre}
            </h3>
            <p className='mt-5 front-black text-4xl text-blue-500'>
                ${precio}
            </p>
            <button
                type='button'
                className='bg-blue-500 text-white w-full mt-5 p-2 rounded hover:bg-blue-700 font-bold uppercase'
            >
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
