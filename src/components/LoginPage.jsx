import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  
     // Replace this with your actual authentication check
  const isAuthenticated = localStorage.getItem('adminToken') !== null;

    useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/manage-college'); // Redirect if already logged in
    }
  }, [isAuthenticated, navigate]);

    const handleLogin = () => {
    // Perform login logic and token saving here
    localStorage.setItem('adminToken', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlhdCI6MTc0ODUzMzk4OCwiZXhwIjoxNzQ4NjIwMzg4fQ.CmxVbiABER1-hlQa0oPe8aa2Kckm5I-iLkZ74yleGp-xEl5Cn2wUkAbtf86nE83PyhJdsuvWvq1MQUoQExgS1w');
    navigate('/admin/manage-college'); // Redirect after login
  };
  useEffect(() => {

    const token = localStorage.getItem('token');
    const remember = localStorage.getItem('rememberMe') === 'true';

    if(token && remember){

      navigate('/admin/manage-college');

    }
  }, [navigate]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', {
      email,
      password
    });

    if (response.data.message === "Admin logged in successfully") {
      // Store token (optional)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('rememberMe', rememberMe.toString());

      // Store user data if available
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        
      // Redirect (optional)
      // navigate('/dashboard');
       navigate("/admin/manage-college");
        alert('Login successful!');
  
    } else {
      alert( 'Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert(error.response?.data?.message || 'Something went wrong!');
  }
  finally{
    //navigate("/admin/manage-college");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      {/* Floating background shapes */}
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-4 border-sky-500/30 rounded-full hidden lg:block float-animation"></div>
      <div 
        className="absolute bottom-20 right-32 w-24 h-24 border-4 border-emerald-500/30 rounded-full hidden lg:block float-animation" 
        style={{ animationDelay: '2s' }}
      ></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-gradient flex items-center justify-center mb-4 shadow-lg float-animation">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h2 className="text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        
        {/* Form container with glass effect */}
        <div className="form-container rounded-2xl shadow-xl p-8 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="input-field appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-sky-500 text-gray-900 sm:text-sm"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="input-field appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-sky-500 text-gray-900 sm:text-sm"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    className="sr-only"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className={`checkbox-custom ${rememberMe ? 'checked' : ''}`}></span>
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500 link-underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn-gradient relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white focus:outline-none"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <div>
                <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200 hover:scale-105">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS in JS */}
      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
        }
        
        .form-container {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.85);
        }
        
        .input-field {
          transition: all 0.3s ease;
        }
        
        .input-field:focus {
          transform: translateY(-2px);
        }
        
        .btn-gradient {
          background: linear-gradient(90deg, #0ea5e9 0%, #10b981 100%);
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(90deg, #0891d2 0%, #059669 100%);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
        }
        
        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          filter: blur(60px);
          z-index: -1;
        }
        
        .shape-1 {
          width: 300px;
          height: 300px;
          background: #0ea5e9;
          top: -100px;
          left: -100px;
        }
        
        .shape-2 {
          width: 250px;
          height: 250px;
          background: #10b981;
          bottom: -50px;
          right: -50px;
        }
        
        .checkbox-custom {
          position: relative;
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-right: 8px;
          border-radius: 4px;
          border: 2px solid #10b981;
          background-color: white;
          transition: all 0.2s ease;
        }
        
        .checkbox-custom.checked {
          background-color: #10b981;
          border-color: #10b981;
        }
        
        .checkbox-custom.checked::after {
          content: '';
          position: absolute;
          display: block;
          left: 5px;
          top: 1px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
        
        .link-underline {
          position: relative;
          display: inline-block;
        }
        
        .link-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #0ea5e9 0%, #10b981 100%);
          transition: width 0.3s ease;
        }
        
        .link-underline:hover::after {
          width: 100%;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;