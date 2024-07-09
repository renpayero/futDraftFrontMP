import React, { createContext, useState, useEffect } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { productos as productosDB } from '../data/productos';

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);

    const handleClickCategoria = (idCategoria) => {
        setCategoriaActual(categorias.find(categoria => categoria.id === idCategoria));
        
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    return (
        <ProductosContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                handleSetProducto,
                producto
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;