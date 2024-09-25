import React from 'react'
import useProductos from '../hooks/useProductos.js'
import Categoria from './Categoria.jsx'
import { useAuth } from '../hooks/useAuth.js'

export default function AdminSidebar() {


    const { categorias } = useProductos()
    const { logout, user } = useAuth({middleware: 'auth'})

  return (
    <aside className='md:w-72'>
        <div className='p-4'>
            <img 
                className='w-40 flex justify-center mx-auto'
                src='./img/logo.svg'
                alt='FutDraft Logo'
            />
        </div>

        <p
            className='my-10 text-xl text-center font-bold'
        >
            Hola, {user?.name}!
        </p>

        <div className='mt-10'>
            {categorias.map((categoria) => (
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />   
            ))}
        </div>
        <div className='my-5 px-5'>
            <button
                type='button'
                className='w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700'
                onClick={logout}
            >
                Cerrar Sesión
            </button>
        </div>
    </aside>
  )
}
