import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminSideBar = () => {

      const navigate = useNavigate();
      const handleaddCollege =()=>{
        navigate("/admin/add-college")
      }

      const handleAdminSetting =() =>{

        navigate("/admin/settings")
      }

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 w-64 text-white flex flex-col transition-all duration-300 ease-in-out">
      <div className="p-5 flex items-center space-x-3">
      </div>
      <div className="flex-1 overflow-y-auto">
        
        <Link
          to="/admin/dashboard"
          className="sidebar-item flex items-center space-x-3 px-5 py-3 hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Dashboard</span>
        </Link>

        <div
          onClick={handleaddCollege}
          className="sidebar-item active flex items-center space-x-3 px-5 py-3 hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Add Colleges</span>
        </div>
        
        <div
          onClick={handleAdminSetting}
          className="sidebar-item flex items-center space-x-3 px-5 py-3 hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Settings</span>
        </div>
        
      </div>
      <div className="p-5">
        <div className="flex items-center space-x-3">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MyLjY3IDAgOCAyLjEzIDggN3MtNS4zMyA3LTggNy04LTIuMTMtOC03IDUuMzMtNyA4LTd6bTAgMmMtMS4yNSAwLTIuNSAxLTIuNSAyLjI1YzAgMS4zNCAxLjI1IDIuMjUgMi41IDIuMjVzMi41LS45MSAyLjUtMi4yNWMwLTEuMjUtMS4yNS0yLjI1LTIuNS0yLjI1em0tNC41IDcuMjVjLjI3LS43NS43NS0xLjI1IDEuNS0xLjI1aDZjLjc1IDAgMS4yMy41IDEuNSAxLjI1LjI3LjcyLjI3IDEuNTYuMjcgMi4yNUgxNnYtLjc1YzAtLjQxLS4zNC0uNzUtLjc1LS43NWgtNi41Yy0uNDEgMC0uNzUuMzQtLjc1Ljc1VjE3SDcuNWMwLS42OSAwLTEuNTMuMjctMi4yNXoiLz48L3N2Zz4="
            alt="Admin"
            className="w-10 h-10 rounded-full bg-white/20 p-1"
          />
          <div>
            <h3 className="font-medium">Admin User</h3>
            <p className="text-xs text-white/70">admin@eduadmin.com</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AdminSideBar;
