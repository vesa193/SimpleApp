import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProtectedRoutes } from './protectedRoutes/protectedRoutes';
import { getUserProfileRequest } from './redux/reducers/user/user';
import AllUsers from './screens/AllUsers/AllUsers';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import Profile from './screens/Profile/Profile';
import Register from './screens/Register/Register';
import { getLocalAccessToken } from './utils/utils';

function App() {
    const dispatch = useDispatch();
    const accessToken = getLocalAccessToken();
    useEffect(() => {
        if (accessToken) {
            dispatch(getUserProfileRequest());
        }
    }, [dispatch, accessToken]);

    return (
        <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/allUsers" element={<AllUsers />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
