import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSideBar from "./AdminSideBar";
import AdminManageHomeTopColleges from "./AdminManageHomeTopColleges";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false); // Only render dashboard if admin verified
  const [isLoading, setIsLoading] = useState(true); // Show loading until verification completes

  useEffect(() => {
    const verifyAdmin = async () => {
      // ✅ Use the same key as in AuthService
      const token = localStorage.getItem("adminToken");
      console.log("Admin token from localStorage:", token);

      if (!token) {
        console.warn("No token found, redirecting to admin login");
        navigate("/admin-login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/api/auth/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Verify response:", response.data);

        // ✅ Check the correct role from backend response
        if (response.data.success && response.data.role === "ADMIN") {
          setIsVerified(true);
        } else {
          console.warn("Not an admin or verification failed, redirecting");
          navigate("/admin-login");
        }
      } catch (error) {
        console.error("Admin token verification failed:", error.response?.data || error);
        navigate("/admin-login");
      } finally {
        setIsLoading(false);
      }
    };

    verifyAdmin();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-xl">Verifying Admin...</p>
      </div>
    );
  }

  if (!isVerified) {
    return null; // Don't render dashboard if not verified
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-3">
              <button id="menu-toggle" className="p-2 rounded-md hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 absolute left-3 top-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div id="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md border-l-4 border-indigo-500">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Total Colleges</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">248</h3>
                    <p className="text-xs text-green-500 mt-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      12% increase
                    </p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">User Traffic</h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Traffic Chart</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">College Distribution</h3>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <p className="text-gray-500">College Distribution Chart</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Recent Activity</h3>
              </div>
              <div className="p-5 text-gray-600">Activity List Here...</div>
            </div>

            {/* Manage Home Top Colleges */}
            <AdminManageHomeTopColleges />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
