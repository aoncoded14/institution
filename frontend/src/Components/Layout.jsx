
//import courses from '../assets/svgs/courses.png';
import library from '../assets/svgs/library.png';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Layout = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-left">
          <img
            src={library}
            alt="Description"
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </Col>
        <Col md={6} className="text-right">
          <div style={{ position: 'relative', right: '0' }}>
            <p style={{ display: 'inline-block', marginRight: '10px' }}>
              Your text here
            </p>
            <Button variant="primary">Your Button</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

