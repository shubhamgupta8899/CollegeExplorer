// src/services/AuthService.js

const AuthService = {
  verifyToken: async () => {
    const token = localStorage.getItem('adminToken');

    if (!token) return false;

    try {
      const response = await fetch('http://localhost:8080/api/admin/verify', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) return false;

      const data = await response.json();
      return data.success === true;
    } catch (error) {
      console.error('Token verification failed:', error);
      return false;
    }
  },
};

export default AuthService;
