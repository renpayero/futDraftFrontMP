import React, { createContext, useState, useEffect } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { productos as productosDB } from '../data/productos';
import { toast} from "react-toastify";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calcularTotal = () => {
            if(pedido.length === 0){
                setTotal(0);
                return;
            }
            const total = pedido.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
            setTotal(total);
        }
        calcularTotal();
    }, [pedido]);

    const handleClickCategoria = (idCategoria) => {
        setCategoriaActual(categorias.find(categoria => categoria.id === idCategoria));
        
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    const handleAgregarProducto = ({categoria_id, ...producto}) => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(productoActualizado);
            toast.success("Producto actualizado", {
              position: "top-right",
              autoClose: 2000,
            });
          } else {
            setPedido([...pedido, producto]);
            toast.success("Producto agregado", {
              position: "top-right",
              autoClose: 2000,
            });
          }
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
        toast.error("Producto eliminado", {
          position: "top-right",
          autoClose: 2000,
        });
    }

    const handleEditarCantidad = (id) => {
        const productoActualizado = pedido.filter(producto => producto.id === id)[0];
        setProducto(productoActualizado);
        setModal(!modal);
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
                handleAgregarProducto,
                handleEditarCantidad,
                handleEliminarProducto,
                total
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;