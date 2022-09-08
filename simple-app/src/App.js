import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { userRegister } from './lib/api';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
import AllUsers from './screens/AllUsers/AllUsers';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

function App() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onRegister = (e) => {
        e.preventDefault();
        userRegister(formData)
            .then((res) => {
                login(res.data);
                setErrorMessage('');
            })
            .catch((err) => {
                const { response } = err;
                setErrorMessage(response.data.message);
            });
    };

    return (
        <Routes>
            <Route index path="/" element={<Login />} />
            <Route
                path="/register"
                element={
                    <Register
                        onChangeHandler={onChangeHandler}
                        onSubmitHandler={onRegister}
                        errorMessage={errorMessage}
                        setErrorMessage={setErrorMessage}
                    />
                }
            />
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
        </Routes>
    );
}

export default App;
