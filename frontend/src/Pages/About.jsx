
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header className="bg-primary text-white">
              <h2>About Us</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>Intercontinental College of Technology Makurdi</Card.Title>
              <Card.Text>
                <p><strong>Address:</strong> km2, New Otupko Road, Makurdi, Benue State, Nigeria</p>
                <p><strong>Phone:</strong> +234 8021164444</p>
                <p><strong>Email:</strong> <a href="mailto:ictechmkd@gmail.com">ictechmkd@gmail.com</a></p>
                <p><strong>Type:</strong> Polytechnic</p>
              </Card.Text>
              <hr />
              <h4>Our Schools and Courses</h4>
              <div>
                <h5>School of Engineering</h5>
                <ul>
                  <li>ND Electrical/Electronics Technology</li>
                </ul>
                <h5>School of Science Technology</h5>
                <ul>
                  <li>ND Statistics</li>
                  <li>ND Computer Science</li>
                  <li>ND Multimedia Technology</li>
                  <li>ND Science Laboratory Technology</li>
                </ul>
                <h5>School of Management and Business Studies</h5>
                <ul>
                  <li>ND Accountancy</li>
                  <li>ND Business Administration and Management</li>
                </ul>
                <h5>School of Art and Design</h5>
                <ul>
                  <li>ND Printing Technology</li>
                  <li>ND Fashion Design and Clothing Technology</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
