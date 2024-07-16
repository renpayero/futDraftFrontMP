import React, { createContext, useState, useEffect } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { productos as productosDB } from '../data/productos';

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = (idCategoria) => {
        setCategoriaActual(categorias.find(categoria => categoria.id === idCategoria));
        
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    const handleAgregarProducto = ({categoria_id, imagen, ...producto}) => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(productoActualizado);
          } else {
            setPedido([...pedido, producto]);
          }
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
                producto,
                pedido,
                handleAgregarProducto
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;