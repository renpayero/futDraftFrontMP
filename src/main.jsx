import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { ProductosProvider } from './context/ProductosProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductosProvider>
      <RouterProvider router={router} />
      <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    limit={1}
      />
    </ProductosProvider>
  </React.StrictMode>,
)
