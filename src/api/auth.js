// src/api/auth.js
import axios from 'axios';

export const verifyToken = async (token) => {
  try {
    const response = await axios.get('http://localhost:8080/api/auth/verify-token', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      validateStatus: function (status) {
        return status === 200 || status === 401; // Don't throw for 401
      }
    });
    
    if (response.status === 200) {
      return { isValid: true };
    } else {
      return { isValid: false };
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    return { isValid: false };
  }
};