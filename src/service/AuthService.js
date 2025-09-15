// src/services/AuthService.js
import axios from "axios";

const API = "http://localhost:8080/api/auth";

const AuthService = {
  // Admin Login
  adminLogin: async (credentials) => {
    const response = await axios.post(`${API}/login`, credentials);
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem("adminToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response.data;
  },

  // Admin Register (optional)
  adminRegister: async (userData) => {
    const response = await axios.post(`${API}/register`, userData);
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem("adminToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    }
    return response.data;
  },

  // Verify Admin Token with auto-refresh
  verifyAdminToken: async () => {
    let token = localStorage.getItem("adminToken");
    if (!token) return false;

    try {
      const response = await axios.get(`${API}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.success === true && response.data.role === "ADMIN";
    } catch (err) {
      // If token expired, try refresh
      if (err.response?.status === 401) {
        const newToken = await AuthService.refreshToken();
        if (!newToken) return false; // Refresh failed, logout
        try {
          const retryRes = await axios.get(`${API}/verify`, {
            headers: { Authorization: `Bearer ${newToken}` },
          });
          return retryRes.data.success === true && retryRes.data.role === "ADMIN";
        } catch (retryErr) {
          console.error("Retry verification failed:", retryErr);
          AuthService.logout();
          return false;
        }
      } else {
        console.error("Admin token verification failed:", err);
        AuthService.logout();
        return false;
      }
    }
  },

  // Refresh token
  refreshToken: async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return null;

    try {
      const res = await axios.post(`${API}/refresh`, { refreshToken });
      localStorage.setItem("adminToken", res.data.accessToken);
      return res.data.accessToken;
    } catch (e) {
      console.error("Refresh token failed", e);
      AuthService.logout();
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("refreshToken");
  },
};

export default AuthService;
