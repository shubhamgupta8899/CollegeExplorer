import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import axios from "axios";

const SignupModal = ({ isOpen, onClose, trigger, onLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "user", // student/parent/counselor -> backend just uses 'USER' role
  });
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          email: formData.email,
          password: formData.password,
          name: formData.name,
        }
      );

      // Save token in localStorage
      localStorage.setItem("userToken", response.data.token);

      // Call parent onLogin to update UI
      onLogin(
        {
          name: formData.name,
          email: formData.email,
          type: "user",
        },
        false
      );

      onClose();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          {trigger && (
            <p className="text-sm text-gray-600 mb-4">
              To access <span className="font-medium">{trigger}</span>, please create an account.
            </p>
          )}

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="mb-4 w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="mb-4 w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="mb-4 w-full px-3 py-2 border rounded"
              required
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">
              Sign Up
            </button>
          </form>

          {/* Use Link instead of <a> */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/admin/login" onClick={onClose} className="text-blue-600 hover:text-blue-800">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
