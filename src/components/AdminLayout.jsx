// src/components/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {/* You can put admin sidebar, navbar here */}
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
};

export default AdminLayout;
