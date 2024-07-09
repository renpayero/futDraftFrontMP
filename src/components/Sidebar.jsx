import Categoria from './Categoria.jsx'
import useProductos from '../hooks/useProductos'

export default function Sidebar() {

    const { categorias } = useProductos()

  return (
    <aside className='md:w-72'>
        <div className='p-4'>
            <img 
                className='w-40 flex justify-center mx-auto'
                src='./img/logo.svg'
                alt='FutDraft Logo'
            />
        </div>
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
            >
                Cancelar Carrito
            </button>
        </div>
    </aside>
  )
}
