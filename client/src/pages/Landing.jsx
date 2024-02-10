import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container fluid className="landing">
      <header className="landing-header text-center py-5">
        <h1>Welcome to Character Quiver</h1>
        <p>Start your journey with our easy-to-use character builder.</p>
      </header>
      <div className="custom-image-container">
        <img src="../src/assets/BONBDYN1ER6A3KJGB92QYHS494LY6CD7_0 (2).jpg" alt="Large Custom Picture" className="custom-image" />
        <Link to="/login" className="login-button-link">
          <Button variant="primary">Login</Button>
        </Link>
      </div>
      <footer className="landing-footer text-center py-3">
        <p>&copy;   2023 Character Quiver</p>
      </footer>
    </Container>
  );
};

export default Landing;
