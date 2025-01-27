import React, { createContext, useState, useEffect } from 'react';
import { categorias as categoriasDB } from '../data/categorias';
import { toast} from "react-toastify";
import clienteAxios from '../config/axios';
import 'react-toastify/dist/ReactToastify.css';

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [producto, setProducto] = useState({});
    const [modal, setModal] = useState(false);
    const [modalCrearProducto, setModalCrearProducto] = useState(false);
    const [modalEditarProducto, setModalEditarProducto] = useState(false);
    const [productoEdicion, setProductoEdicion] = useState({});
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

    const handleClickModalCrearProducto = () => {
        setModalCrearProducto(!modalCrearProducto);
    }

    const handleClickModalEditarProducto = () => {
        setModalEditarProducto(!modalEditarProducto);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    const handleAgregarProducto = ({categoria_id, ...producto}) => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id ? producto : pedidoState);
            setPedido(productoActualizado);
          } else {
            setPedido([...pedido, producto]);
            toast.success("Producto agregado", {
              position: "top-right",
              autoClose: 2000,
              onClose: () => toast.clearWaitingQueue(),
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
            const {data} = await clienteAxios.post('/api/pedidos', 
                {
                    total,
                    productos: pedido.map(producto => {
                        return {
                            id: producto.id,
                            cantidad: producto.cantidad
                        }
                    }),
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                    }
                }
            );
            toast.success(data.message);
            setTimeout(() => {
                setPedido([]);
            }, 1000);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleCrearProducto = async (producto) => {
        try{
            const {data} = await clienteAxios.post('/api/productos', producto);
            setModalCrearProducto(false);
            toast.success("Producto creado correctamente", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        catch(error){
            console.log(error);
            toast.error("Error al crear el producto", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const handleEliminarProductoDB = async (id) => {
        try{
            const {data} = await clienteAxios.delete(`/api/productos/${id}`);
            toast.success("Producto eliminado correctamente", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        catch(error){
            console.log(error);
            toast.error("Error al eliminar el producto", {
                position: "top-right",
                autoClose: 2000,
            });
        }
    }

    const handleEditarProductoDB = async (producto) => {
        try{
            const {data} = await clienteAxios.put(`/api/productos/${producto.id}`, producto);
            setModalEditarProducto(false);
            toast.success("Producto editado correctamente", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        catch(error){
            console.log(error);
            toast.error("Error al editar el producto", {
                position: "top-right",
                autoClose: 2000,
            });
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
                handleSumbitNuevaOrden,
                handleCrearProducto,
                modalCrearProducto,
                handleClickModalCrearProducto,
                handleEliminarProductoDB,
                handleEditarProductoDB,
                handleClickModalEditarProducto,
                modalEditarProducto,
                setProductoEdicion,
                productoEdicion,
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;