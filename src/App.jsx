import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopColleges from './pages/TopColleges';
import TopAcademics from './pages/TopAcademics';
import TopPlacements from './pages/TopPlacements';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './components/LoginPage';
import AdminManageCollege from './pages/AdminManageCollege';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';
import AdminAddCollege from './components/AdminAddCollege'; // Adjust path as needed
import AdminDashboard from './components/AdminDashboard';
import AdminSettings from './components/AdminSettings';
function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-colleges" element={<TopColleges />} />
          <Route path="/top-academics" element={<TopAcademics />} />
          <Route path="/top-placements" element={<TopPlacements />} />
          <Route path="/colleges/:category" element={<CategoryPage />} />
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/admin/manage-college"
            element={
              <AdminManageCollege/>
            }
          />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          />

          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          
          <Route path="/admin/add-college" element={<AdminAddCollege/>}/>

          <Route path="/admin/settings" element={<AdminSettings/>}/>
          {/* Optional: 404 fallback */}
          <Route path="*" element={<div className="p-10 text-xl">Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
