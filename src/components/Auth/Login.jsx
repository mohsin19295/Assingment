import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate()

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'password') {
      login();
      navigate('/companies')
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;