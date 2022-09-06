import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from './hooks/useAuth';
import { userLogin, userRegister } from './lib/api';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
import AllUsers from './screens/AllUsers/AllUsers';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

function App() {
  const { login, logout } = useAuth();
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

  const onLogin = (e) => {
    e.preventDefault();
    userLogin(formData)
      .then((res) => {
        const { accessToken, message } = res.data;
        if (accessToken) {
          login(res.data);
          setFormData({
            username: '',
            password: '',
          });
          setErrorMessage('');
          return;
        }

        if (message) {
          setErrorMessage(message);
          return;
        }

        logout();
      })
      .catch((err) => {
        const { response } = err;
        setErrorMessage(response?.data?.message);
        logout();
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
        logout();
      });
  };

  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <Login
            onChangeHandler={onChangeHandler}
            onSubmitHandler={onLogin}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        }
      />
      <Route path="/register" element={<Register onChangeHandler={onChangeHandler} onSubmitHandler={onRegister} />} />
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
