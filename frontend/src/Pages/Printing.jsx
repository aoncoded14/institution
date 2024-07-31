import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PrintingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionDate, setSessionDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic here
    alert('Printing session booked!');
  };

  return (
    <Container className="p-5" style={{ backgroundImage: 'url(/path-to-printing-bg.jpg)', backgroundSize: 'cover' }}>
      <h1 className="text-center text-white">Book a Printing Session</h1>
      <Form onSubmit={handleBooking} className="bg-light p-4 rounded">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formSessionDate">
          <Form.Label>Preferred Session Date</Form.Label>
          <Form.Control
            type="date"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Book Session
        </Button>
      </Form>
    </Container>
  );
};

export default PrintingPage;
