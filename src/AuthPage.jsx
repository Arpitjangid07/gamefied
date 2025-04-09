import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './AuthPage.css';  // Import the CSS file

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        
        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`tab ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
          <button
            className={`tab ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            SIGN UP
          </button>
        </div>

        <div className="auth-content">
          {/* Google Auth */}
          <button className="google-btn">
            <FaGoogle className="google-icon" /> Continue with Google
          </button>

          <div className="divider">OR</div>

          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="Username or Email"
                className="input"
              />
              
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="input"
                />
                <button
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
              />

              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="input"
                />
                <button
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              <div className="terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to <a href="#">Terms and Privacy Policy</a>
                </label>
              </div>
            </>
          )}

          <button className="submit-btn">
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>

          <div className="support">
            For any issues or assistance, email{' '}
            <a href="mailto:help@code.com">help@code.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
