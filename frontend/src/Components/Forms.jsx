import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";
import "../styles/Forms.css";
import LoadingIndicator from "./LoadingIndicator";

function Forms({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "SignUp";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      // Assuming `error.response.data` has a user-friendly message
      alert(error.response ? error.response.data.detail : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forms-container">
      <Container className="forms-form">
        <h2>{name}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"  // Changed from 'email' to 'text' assuming you need a username
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <LoadingIndicator /> : name}
          </Button>

          <p className="mt-3">
            {method === "login" ? (
              <span>
                Don't have an account? <Link to="/register">SignUp</Link>
              </span>
            ) : (
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            )}
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Forms;
