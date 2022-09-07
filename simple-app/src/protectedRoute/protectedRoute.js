import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
    const { userData } = useSelector((state) => state?.user);

    if (!userData?.accessToken) {
        // user is not authenticated
        return <Navigate to="/" replace />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
