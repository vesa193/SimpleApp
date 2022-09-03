import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Dashboard from './screens/Dashboard/Dashboard';
import AllUsers from './screens/AllUsers/AllUsers';
import { ProtectedRoute } from './protectedRoute/protectedRoute';
import { useAuth } from './hooks/useAuth';
import { userLogin, userRegister } from './lib/api';

function App() {
  const { login, logout } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
   
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    userLogin(formData)
      .then(res => {
        const { accessToken, message } = res.data;
        if (!!accessToken) {
          login(res.data);
          setErrorMessage('');
          return;
        }

        if (!!message) {
          setErrorMessage(message);
          return;
        }

        logout();
      })
      .catch(err => {
        const { response } = err;
        setErrorMessage(response?.data?.message);
        logout();
      });
  };

  const onRegister = (e) => {
    e.preventDefault();
    userRegister(formData)
      .then(res => {
        login(res.data);
        setErrorMessage('');
      })
      .catch(err => {
        const { response } = err;
        setErrorMessage(response.data.message);
        logout();
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Login onChangeHandler={onChangeHandler} onSubmitHandler={onLogin} errorMessage={errorMessage} />} />
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
    </div>
  );
}

export default App;
