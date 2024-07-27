import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here, then redirect
    history.push('/admissions');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundImage: 'url(/path-to-background.jpg)', backgroundSize: 'cover' }}>
      <Form onSubmit={handleLogin} className="p-4 bg-light rounded">
        <h2 className="text-center mb-4">Login</h2>
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

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login1;
