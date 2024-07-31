import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";
import "../styles/Forms.css";
//import LoadingIndicator from "./LoadingIndicator";

function Forms({ route, method }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "SignUp";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { email, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/api/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forms-container">
      <Container className="forms-form">
        <h2>{name}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {name}
          </Button>
          <p className="mt-3">
            {method === "login" ? (
              <span>
                Don't have an account? <Link to="/api/register">SignUp</Link>
              </span>
            ) : (
              <span>
                Already have an account? <Link to="/api/login">Login</Link>
              </span>
            )}
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Forms;
