import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { userData } = useSelector((state) => state?.user);

    if (!userData?.accessToken) {
        // user is not authenticated
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
};
