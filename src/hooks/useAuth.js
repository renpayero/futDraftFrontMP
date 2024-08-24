import clienteAxios from "../config/axios";
import useSWR from "swr";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = ({middleware, url}) => {

    const navigate = useNavigate();

    const {data: user, error, mutate} = useSWR('/api/user', () => 
        clienteAxios.get('/api/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        }
        )
    )

    const login = async (datos, setErrores) => {
		try {
			const {data} = await clienteAxios.post('/api/login', datos);
			localStorage.setItem('AUTH_TOKEN', data.token);
			setErrores([]);
            await mutate();
		} catch (error) {
			setErrores(Object.values(error.response.data.errors));
		}
    }

    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`
                }
            }
            );
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error) {
            console.log(error);
        }
    }

    const register = async (datos, setErrores) => {
		try {
			const {data} = await clienteAxios.post('/api/registro', datos);
			localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await mutate();
		} catch (error) {
			setErrores(Object.values(error.response.data.errors));
		}
    }
    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url);
        }
        if(middleware === 'auth' && error) {
            navigate('/auth/login');
        }
    }, [user, error])

    return {
        login,
        logout,
        register,
        user,
        error
    }
}