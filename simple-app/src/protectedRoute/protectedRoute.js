import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user?.accessToken) {
    // user is not authenticated
    return <Navigate to="/" replace />;
  }

  return children || <Outlet />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
