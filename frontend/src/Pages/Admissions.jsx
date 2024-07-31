
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Admissions.css'; // Import custom CSS

const Admissions = () => {
  return (
    <Container className="admissions-page p-5">
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="admissions-content">
            <h1 className="display-4">Admissions</h1>
            <p className="lead">Join the Intercontinental College of Technology Makurdi and become part of a dynamic community focused on innovation and excellence.</p>
            <Link to="/apply">
              <Button variant="primary" size="lg">Apply Now</Button>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <img src="/path-to-admissions-image.jpg" alt="Admissions" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
