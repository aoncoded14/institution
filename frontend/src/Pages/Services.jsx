
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center mb-4">
            <Card.Header className="bg-primary text-white">
              <h2>Our Services</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>Library</Card.Title>
              <Card.Text>
                <p>
                  Our well-equipped library provides a serene environment for students and staff to study and conduct research. With a vast collection of books, journals, and digital resources, our library is a cornerstone of academic excellence.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Header className="bg-primary text-white">
              <h2>Bookstore and Printing Press</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>Bookstore</Card.Title>
              <Card.Text>
                <p>
                  Our on-campus bookstore offers a wide range of textbooks, stationery, and other academic materials at affordable prices. Students can find all their required materials in one convenient location.
                </p>
              </Card.Text>
              <Card.Title>Printing Press</Card.Title>
              <Card.Text>
                <p>
                  Our state-of-the-art printing press provides high-quality printing services for all your academic and personal needs. From course materials to custom prints, we ensure timely and professional service.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
