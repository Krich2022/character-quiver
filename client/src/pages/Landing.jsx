import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container
      fluid
      className="landing landing-background container-background mt-5">
      <header className="landing-header text-center py-5 text-color">
        <h1>Welcome to Character Quiver</h1>
        <p>Start your journey with our easy-to-use character builder.</p>
        <div className="custom-image-container">
          <img
            src="/assets/cqDrawing.jpg"
            alt="Large Custom Picture"
            className="custom-image mb-4"
          />
          <div className="login-button-wrapper">
            <Link to="/login" className="login-button-link">
              <Button variant="primary" className="button-container">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <footer className="landing-footer text-center py-3">
        <p>&copy; 2024 Character Quiver</p>
      </footer>
    </Container>
  );
};

export default Landing;
