import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { ProductosProvider } from './context/ProductosProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <RouterProvider router={router} />
    </ProductosProvider>
  </React.StrictMode>,
)
