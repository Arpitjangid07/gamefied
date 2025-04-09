import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">RoomRush</div>
        <nav>
          <a href="#courses">Courses</a>
          <a href="#practice">Practice</a>
          <a href="#compete">Compete</a>
          <button className="btn">Login</button>
          <button className="btn signup">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main-section">
        <h1>Code Your Future with RoomRush 🚀</h1>
        <p>Join millions of coders improving their skills through practice and competitions.</p>
        
        <div className="email-form">
          <input type="email" placeholder="Enter your email" />
          <button className="btn start-btn">Start Playing Today ⚡</button>
        </div>

      </main>

      {/* Courses Section */}
      <section className="courses-section" id="courses">
        <h2>🔥 Popular</h2>
        <div className="course-cards">
          <div className="card">
            <h3>Python</h3>
            <p>Get hands-on practice with Python fundamentals.</p>
            <button className="btn">Play</button>
          </div>

          <div className="card">
            <h3>JavaScript</h3>
            <p>Master modern JavaScript with real projects.</p>
            <button className="btn">Play</button>
          </div>

          <div className="card">
            <h3>C++</h3>
            <p>Brush up your C++ skills and prepare for coding interviews.</p>
            <button className="btn">Play</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>💬 What Our Users Say</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"RoomRush helped me crack my dream job at Google!"</p>
            <h4>- Ankit Sharma</h4>
          </div>
          <div className="testimonial">
            <p>"Excellent platform for coding contests and practice."</p>
            <h4>- Priya Verma</h4>
          </div>
          <div className="testimonial">
            <p>"The courses are practical and easy to follow. Highly recommend!"</p>
            <h4>- Rahul Mehta</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <p>© 2025 RoomRush Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
