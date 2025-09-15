import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../service/AuthService";

const ProtectedRoute = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        // No token, redirect to login
        setIsVerified(false);
        setIsVerifying(false);
        return;
      }

      try {
        const isValid = await AuthService.verifyAdminToken(token);
        setIsVerified(isValid);
      } catch (err) {
        console.error("Token verification failed:", err);

        // Cleanup invalid tokens
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("user");

        setIsVerified(false);
      } finally {
        setIsVerifying(false);
      }
    };

    checkAuth();
  }, []);

  if (isVerifying) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Verifying admin access...
      </div>
    );
  }

  return isVerified ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
