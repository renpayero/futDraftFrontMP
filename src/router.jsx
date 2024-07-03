import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Inicio from './views/Inicio.jsx';
import Login from './views/Login.jsx';
import Registro from './views/Registro.jsx';


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
    }
]);

export default Router;