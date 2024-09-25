import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Inicio from './views/Inicio.jsx';
import Login from './views/Login.jsx';
import Registro from './views/Registro.jsx';
import Productos from './views/Productos.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import AdminRoute from './components/AdminRoute.jsx';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },  
            {
                path: '/auth/registro',
                element: <Registro />
            } 
        ]
    },
    {
        path: '/admin',
        element: <AdminRoute />,
        children: [
            {
                path: '/admin',
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <Productos />
                    }
                ]
            }
        ]
    }
]);

export default Router;