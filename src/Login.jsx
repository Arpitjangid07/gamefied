import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './Login.css';  // Import the CSS file

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-tabs">
          <button
            className={`tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            LOGIN
          </button>
          <button
            className={`tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            SIGN UP
          </button>
        </div>

        <div className="auth-content">
          <button className="google-btn">
            <FaGoogle className="google-icon" /> Continue with Google
          </button>

          <div className="separator">OR</div>

          {isLogin ? (
            <>
              <input type="text" placeholder="Username or Email" className="input" />
              <div className="password-wrapper">
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
              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <div className="password-wrapper">
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
                  I agree to the <a href="#">Terms and Privacy Policy</a>
                </label>
              </div>
            </>
          )}

          <button className="submit-btn">
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>

          <div className="footer">
            For any issues, email <a href="mailto:help@codechef.com">help@codechef.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
