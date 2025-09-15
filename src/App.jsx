import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TopColleges from './pages/TopColleges';
import TopAcademics from './pages/TopAcademics';
import TopPlacements from './pages/TopPlacements';
import CategoryPage from './pages/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import LoginPage from './components/LoginPage';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './components/AdminDashboard';
import AdminAddCollege from './components/AdminAddCollege';
import AdminManageCollege from './pages/AdminManageCollege';
import AdminSettings from './components/AdminSettings';
import SignupModal from './components/SignupModal';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from "./pages/ForgotPasswordPage";
import ResetPassword from "./pages/ResetPasswordPage";

// Custom hook to read auth from localStorage
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasSignedUp, setHasSignedUp] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const adminStatus = localStorage.getItem("isAdmin");
    const signedUp = localStorage.getItem("hasSignedUp");

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
      }
      setIsAdmin(adminStatus === "true");
    }

    setHasSignedUp(signedUp === "true");
    setIsLoading(false);
  }, []);

  return { user, isAdmin, isLoading, hasSignedUp, setUser, setIsAdmin, setHasSignedUp };
};

// User-protected route component
const UserProtectedRoute = ({ children, user, isLoading, openSignupModal }) => {
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      openSignupModal('protected-route');
    }
  }, [isLoading, user, openSignupModal]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

function App() {
  const { user, isAdmin, isLoading, hasSignedUp, setUser, setIsAdmin, setHasSignedUp } = useAuth();
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState('');

  const handleLogin = (userData, admin = false) => {
    setUser(userData);
    setIsAdmin(admin);
    setHasSignedUp(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isAdmin", admin.toString());
    localStorage.setItem("hasSignedUp", "true");
    setIsSignupModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
  };

  const openSignupModal = (trigger) => {
    if (!user) {
      setModalTrigger(trigger);
      setIsSignupModalOpen(true);
    }
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <ScrollToTop />
        <Navbar onLinkClick={openSignupModal} user={user} isAdmin={isAdmin} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Home onLinkClick={openSignupModal} user={user} hasSignedUp={hasSignedUp} />} />

          {/* User-protected pages */}
          <Route path="/top-colleges" element={
            <UserProtectedRoute user={user} isLoading={isLoading} openSignupModal={openSignupModal}>
              <TopColleges onLinkClick={openSignupModal} user={user} />
            </UserProtectedRoute>
          } />
          <Route path="/top-academics" element={
            <UserProtectedRoute user={user} isLoading={isLoading} openSignupModal={openSignupModal}>
              <TopAcademics onLinkClick={openSignupModal} user={user} />
            </UserProtectedRoute>
          } />
          <Route path="/top-placements" element={
            <UserProtectedRoute user={user} isLoading={isLoading} openSignupModal={openSignupModal}>
              <TopPlacements onLinkClick={openSignupModal} user={user} />
            </UserProtectedRoute>
          } />
          <Route path="/colleges/:category" element={
            <UserProtectedRoute user={user} isLoading={isLoading} openSignupModal={openSignupModal}>
              <CategoryPage onLinkClick={openSignupModal} user={user} />
            </UserProtectedRoute>
          } />

          {/* Login / Signup */}
          <Route path="/admin/login" element={
            isAdmin ? <Navigate to="/admin/dashboard" replace /> : <LoginPage onLogin={handleLogin} />
          } />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/add-college" element={
            <ProtectedRoute>
              <AdminAddCollege />
            </ProtectedRoute>
          } />
          <Route path="/admin/manage-college" element={
            <ProtectedRoute>
              <AdminManageCollege />
            </ProtectedRoute>
          } />
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          } />

          {/* Catch-all 404 */}
          <Route path="*" element={<div className="p-10 text-xl">Page not found</div>} />
        </Routes>

        {/* Signup Modal */}
        {isSignupModalOpen && (
          <SignupModal
            isOpen={isSignupModalOpen}
            onClose={closeSignupModal}
            trigger={modalTrigger}
            onLogin={handleLogin}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
  