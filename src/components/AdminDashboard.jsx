import React from "react";
import AdminSideBar from "./AdminSideBar";
const AdminDashboard = () => {
  return (

    <div className="flex h-screen ">
     {/* Sidebar */}
      <AdminSideBar />

    <div className="flex-1 flex flex-col overflow-hidden">

          
      {/* Top Navigation */}
      <header className="bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <button id="menu-toggle" className="p-2 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {/* Dashboard Section */}
        <div id="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards */}
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

            <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md border-l-4 border-purple-500">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Active Ads</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">36</h3>
                  <p className="text-xs text-green-500 mt-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    8% increase
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md border-l-4 border-green-500">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Top Performing</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">IIT Bhopal</h3>
                  <p className="text-xs text-green-500 mt-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    24% increase
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md border-l-4 border-blue-500">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">Page Views</p>
                  <h3 className="text-2xl font-bold text-gray-800 mt-1">89,721</h3>
                  <p className="text-xs text-green-500 mt-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    18% increase
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">User Traffic</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">Daily</button>
                  <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Weekly</button>
                  <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Monthly</button>
                </div>
              </div>
              <div className="h-64">
                {/* Chart would be rendered here */}
                <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Traffic Chart</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">College Distribution</h3>
                <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              <div className="h-64">
                {/* Chart would be rendered here */}
                <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
                  <p className="text-gray-500">College Distribution Chart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">Recent Activity</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-5 hover:bg-gray-50 transition-colors flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">New college added</p>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Delhi Technical University was added to the database</p>
                </div>
              </div>
              <div className="p-5 hover:bg-gray-50 transition-colors flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">College details updated</p>
                    <span className="text-sm text-gray-500">5 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Mumbai University details were updated</p>
                </div>
              </div>
              <div className="p-5 hover:bg-gray-50 transition-colors flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">New ad campaign created</p>
                    <span className="text-sm text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Banner ad for IIT Bhopal admission created</p>
                </div>
              </div>
              <div className="p-5 hover:bg-gray-50 transition-colors flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium text-gray-800">Ad campaign ended</p>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Pune Engineering College campaign ended with 12,450 views</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View All Activity</button>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default AdminDashboard;