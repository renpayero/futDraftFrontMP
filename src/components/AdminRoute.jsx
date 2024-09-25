import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AdminRoute() {
    const { user, error } = useAuth({ middleware: 'auth' });
    if (error) {
        console.error(error);
        return <Navigate to="/auth/login" />;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    if (!user.is_admin) {
        return <Navigate to="/auth/login" />;
    }

    return <Outlet />;

}