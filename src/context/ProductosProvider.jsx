import React, { createContext, useState, useEffect } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { toast} from "react-toastify";
import clienteAxios from '../config/axios';

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState({});
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

    const obtenerCategorias = async () => {
        try {
            const {data} = await clienteAxios('/api/categorias');
            setCategorias(data.data);
            setCategoriaActual(data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerTodosLosProductos = async () => {
        try {
            const {data} = await clienteAxios('/api/productos');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, []);

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

    const handleSumbitNuevaOrden = async () => {
        try{
            await clienteAxios.post('/api/pedidos', 
                {
                    total,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                    }
                }
            );
        }
        catch(error){
            console.log(error);
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
                handleAgregarProducto,
                handleEditarCantidad,
                handleEliminarProducto,
                total,
                handleSumbitNuevaOrden
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;