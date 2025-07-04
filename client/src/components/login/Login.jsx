import { Toaster,toast } from 'react-hot-toast';
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';
import './login.css';
import { loginReq } from '../../api/auth.api';
import { useNavigate } from '@tanstack/react-router';
import { useAuthContext } from '../../hooks/useAuthContextHook';
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
 const navigate = useNavigate();
 const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
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

  try {
    const response = await loginReq(formData.email, formData.password);
    // console.log(response);
    
    toast.success("Login successful!",{
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
      const user = response?.data?.response?.user;

  if (user?.token) {

    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User logged in:", user);
    dispatch({ type: "LOGIN", payload: user }); 
    navigate({ to: '/dashboard' });

  } else {
    console.warn("Login failed or missing token");
  }

  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      'Login failed. Please try again.';
    setErrors({ general: message });
    toast.error(message,{style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }});
  } finally {
    setIsLoading(false);
  }
};


  return (
    <>

      <div className="login-container">
        <div className="login-bg-decoration">
          <div className="login-bg-circle login-bg-circle-1"></div>
          <div className="login-bg-circle login-bg-circle-2"></div>
          <div className="login-bg-circle login-bg-circle-3"></div>
        </div>
        <div className="login-card-wrapper">
          <div className="login-card">
            <div className="login-header">
              <div className="login-icon-wrapper">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="login-title">Welcome Back</h1>
              <p className="login-subtitle">Sign in to your account</p>
            </div>


            <div className="login-form">

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
            <div className="login-divider">
              <div className="login-divider-line">
                <div className="login-divider-border"></div>
              </div>
              <div className="login-divider-text">
                <span>Or continue with</span>
              </div>
            </div>
         <div className="login-social">
  <button
    className="login-social-btn"
    onClick={() => {
      setFormData({
        email: "rushichavan2327@gmail.com",
        password: "12345678"
      });
      handleSubmit({ preventDefault: () => {} });
    }}
  >
    <span>Continue as a Guest</span>
  </button>
</div>
            <p className="login-signup">
              Don't have an account?{' '}
              <button className="login-signup-link" onClick={() => navigate({ to: '/auth/signup' })}>
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
        <Toaster position="bottom-left" />
    </>
  );
}