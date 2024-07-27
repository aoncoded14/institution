import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="bg-primary text-white text-center">
              <h2>Welcome to Intercontinental College of Technology Makurdi</h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                <p>
                  Welcome to Intercontinental College of Technology Makurdi, located at km2, New Otupko Road, Makurdi, Benue State, Nigeria. We are a polytechnic institution dedicated to providing quality education and practical training to our students. You can reach us at +234 8021164444 or via email at <a href="mailto:ictechmkd@gmail.com">ictechmkd@gmail.com</a>.
                </p>
                <p>
                  Our institution offers a variety of courses across multiple schools, ensuring that students receive comprehensive education in their chosen fields. We are committed to fostering a learning environment that encourages innovation, creativity, and practical skills.
                </p>
              </Card.Text>

              <Card.Title>Our Schools and Courses</Card.Title>
              <Card.Text>
                <p><strong>School of Engineering:</strong> ND Electrical/Electronics Technology</p>
                <p><strong>School of Science Technology:</strong></p>
                <ul>
                  <li>ND Statistics</li>
                  <li>ND Computer Science</li>
                  <li>ND Multimedia Technology</li>
                  <li>ND Science Laboratory Technology</li>
                </ul>
                <p><strong>School of Management and Business Studies:</strong></p>
                <ul>
                  <li>ND Accountancy</li>
                  <li>ND Business Administration and Management</li>
                </ul>
                <p><strong>School of Art and Design:</strong></p>
                <ul>
                  <li>ND Printing Technology</li>
                  <li>ND Fashion Design and Clothing Technology</li>
                </ul>
              </Card.Text>

              <Card.Title>Our Services</Card.Title>
              <Card.Text>
                <p>
                  At Intercontinental College of Technology Makurdi, we offer several services to support our students' academic journey:
                </p>
                <h5>Library</h5>
                <p>
                  Our well-equipped library provides a serene environment for students and staff to study and conduct research. With a vast collection of books, journals, and digital resources, our library is a cornerstone of academic excellence.
                </p>
                <h5>Bookstore and Printing Press</h5>
                <p>
                  Our on-campus bookstore offers a wide range of textbooks, stationery, and other academic materials at affordable prices. Students can find all their required materials in one convenient location. Additionally, our state-of-the-art printing press provides high-quality printing services for all your academic and personal needs. From course materials to custom prints, we ensure timely and professional service.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
