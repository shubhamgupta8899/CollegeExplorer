// src/components/AuthRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../api/auth';

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();

useEffect(() => {
  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/auth');
      return;
    }

    const { isValid } = await verifyToken(token);
    if (!isValid) {
      localStorage.removeItem('token');
      localStorage.removeItem('rememberMe');
      navigate('/login');
    }
  };

  checkAuth();
}, [navigate]);
  return children;
};

export default AuthRoute;