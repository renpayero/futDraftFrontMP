import React, { createContext, useState, useEffect } from 'react';

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {

    return (
        <ProductosContext.Provider 
            value={{
                productos: [],
                categorias: [],
                productoSeleccionado: null,
                seleccionarProducto: () => null,
                agregarProducto: () => null,
                eliminarProducto: () => null,
                total: 0,
                cantidad: 0,
                vaciarCarrito: () => null,
                autenticado: true,
            }}
        >
            {children}
        </ProductosContext.Provider>
    )
    }

export { ProductosProvider};

export default ProductosContext;