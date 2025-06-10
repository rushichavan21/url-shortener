import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, AlertCircle, User } from 'lucide-react';
import './signup.css';
export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
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
      alert(`Account created successfully! Welcome ${formData.firstName}!`);
    }, 2000);
  };

  return (
    <>

      <div className="signup-container">
        {/* Background decoration */}
        <div className="signup-bg-decoration">
          <div className="signup-bg-circle signup-bg-circle-1"></div>
          <div className="signup-bg-circle signup-bg-circle-2"></div>
          <div className="signup-bg-circle signup-bg-circle-3"></div>
        </div>

        {/* Signup Card */}
        <div className="signup-card-wrapper">
          <div className="signup-card">
            {/* Header */}
            <div className="signup-header">
              <div className="signup-icon-wrapper">
                <User className="w-8 h-8 text-white" />
              </div>
              <h1 className="signup-title">Create Account</h1>
              <p className="signup-subtitle">Join us today and get started</p>
            </div>

            {/* Form */}
            <div className="signup-form">
             

              {/* Email Field */}
              <div className="signup-field">
                <label htmlFor="email" className="signup-label">
                  Email Address
                </label>
                <div className="signup-input-wrapper">
                  <div className="signup-input-icon">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`signup-input ${errors.email ? 'signup-input-error' : ''}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="signup-error-icon">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="signup-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="signup-field">
                <label htmlFor="password" className="signup-label">
                  Password
                </label>
                <div className="signup-input-wrapper">
                  <div className="signup-input-icon">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`signup-input signup-input-password ${errors.password ? 'signup-input-error' : ''}`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="signup-password-toggle"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <div className="signup-password-strength">
                  Must contain at least 8 characters with uppercase, lowercase, and number
                </div>
                {errors.password && (
                  <p className="signup-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="signup-field">
                <label htmlFor="confirmPassword" className="signup-label">
                  Confirm Password
                </label>
                <div className="signup-input-wrapper">
                  <div className="signup-input-icon">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`signup-input signup-input-password ${errors.confirmPassword ? 'signup-input-error' : ''}`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="signup-password-toggle"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="signup-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div className="signup-field">
                <label className="signup-terms">
                  <input
                    type="checkbox"
                    className="signup-checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <span className="signup-terms-text">
                    I agree to the{' '}
                    <a href="#" className="signup-terms-link">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="signup-terms-link">Privacy Policy</a>
                  </span>
                </label>
                {errors.terms && (
                  <p className="signup-error-message">
                    <AlertCircle className="w-4 h-4" />
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="signup-submit"
              >
                {isLoading ? (
                  <div className="signup-loading">
                    <div className="signup-spinner"></div>
                    Creating account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="signup-divider">
              <div className="signup-divider-line">
                <div className="signup-divider-border"></div>
              </div>
              <div className="signup-divider-text">
                <span>Or sign up with</span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="signup-social">
              <button className="signup-social-btn">

                <span>Continue As a Guest</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="signup-login">
              Already have an account?{' '}
              <button className="signup-login-link">
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}