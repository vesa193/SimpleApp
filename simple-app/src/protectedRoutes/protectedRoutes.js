import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userAccessTokenSelector } from '../selectors/user/userSelectors';
import { getLocalAccessToken } from '../utils/utils';

export const ProtectedRoutes = () => {
    const location = useLocation();
    const accessToken = useSelector((state) => userAccessTokenSelector(state));
    const localAccessToken = getLocalAccessToken();
    const token = localAccessToken || accessToken;

    return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

ProtectedRoutes.displayName = 'ProtectedRoutes';
