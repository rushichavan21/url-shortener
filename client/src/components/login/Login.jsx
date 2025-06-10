import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';
import './login.css';
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login successful! Email: ${formData.email}`);
    }, 1500);
  };

  return (
    <>

      <div className="login-container">
        {/* Background decoration */}
        <div className="login-bg-decoration">
          <div className="login-bg-circle login-bg-circle-1"></div>
          <div className="login-bg-circle login-bg-circle-2"></div>
          <div className="login-bg-circle login-bg-circle-3"></div>
        </div>

        {/* Login Card */}
        <div className="login-card-wrapper">
          <div className="login-card">
            {/* Header */}
            <div className="login-header">
              <div className="login-icon-wrapper">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Sign in to your account</p>
            </div>

            {/* Form */}
            <div className="login-form">
              {/* Email Field */}
              <div className="login-field">
                <label htmlFor="email" className="login-label">
                  Email Address
                </label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`login-input ${errors.email ? 'login-input-error' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="login-error-icon">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="login-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="login-field">
                <label htmlFor="password" className="login-label">
                  Password
                </label>
                <div className="login-input-wrapper">
                  <div className="login-input-icon">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`login-input login-input-password ${errors.password ? 'login-input-error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="login-password-toggle"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="login-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="login-options">
                <label className="login-remember">
                  <input
                    type="checkbox"
                    className="login-checkbox"
                  />
                  <span>Remember me</span>
                </label>
                <button className="login-forgot">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="login-submit"
              >
                {isLoading ? (
                  <div className="login-loading">
                    <div className="login-spinner"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="login-divider">
              <div className="login-divider-line">
                <div className="login-divider-border"></div>
              </div>
              <div className="login-divider-text">
                <span>Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="login-social">
              <button className="login-social-btn">
                <span>Continue as a Guest</span>
              </button>
              
              {/* <button className="login-social-btn">
                <svg className="login-social-icon w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </button> */}
            </div>

            {/* Sign Up Link */}
            <p className="login-signup">
              Don't have an account?{' '}
              <button className="login-signup-link">
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}