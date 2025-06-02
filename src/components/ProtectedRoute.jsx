import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/AuthService";

const ProtectedRoute = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const isValid = await AuthService.verifyToken();
        if (isValid) {
          setIsVerified(true);
        } else {
          localStorage.removeItem("adminToken"); // Optional: clear invalid token
          navigate("/admin/login");
        }
      } catch (err) {
        console.error("Error verifying token:", err);
        navigate("/admin/login");
      } finally {
        setIsVerifying(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isVerifying) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Verifying admin access...
      </div>
    );
  }

  return isVerified ? children : null;
};

export default ProtectedRoute;
