import { useState } from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // 💡 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Form validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🎯 Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Registered Successfully!");
      setFormData({ fullName: "", email: "", password: "" });
      setErrors({});
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <div className="signup-box">
        <div className="logo-container">
          <img src="/codechef-logo.png" alt="CodeChef Logo" />
        </div>

        <h2 className="welcome-text">Create Your Account</h2>

        <button className="google-btn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="or-divider">
          <hr /> <span>OR</span> <hr />
        </div>

        {successMessage && <p className="success-msg">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <p className="error-msg">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>

          <div className="form-group password-group">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>

          <div className="checkbox-group">
            <input type="checkbox" required />
            <span>
              I agree to <a href="#">CodeChef's Terms</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </span>
          </div>

          <button type="submit" className="register-btn">
            REGISTER
          </button>
        </form>

        <div className="footer">
          For any issues or assistance, email{" "}
          <a href="mailto:help@codechef.com">help@codechef.com</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
