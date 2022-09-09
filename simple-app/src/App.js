import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
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
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/allUsers"
                element={
                    <ProtectedRoute>
                        <AllUsers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
