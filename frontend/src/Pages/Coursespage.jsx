
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Courses.css'; // Import custom CSS

const coursesData = {
  'School of Engineering': [
    { id: 1, name: 'ND Electrical/Electronics Technology', img: '/path-to-course-image1.jpg' }
  ],
  'School of Science Technology': [
    { id: 2, name: 'ND Statistics', img: '/path-to-course-image2.jpg' },
    { id: 3, name: 'ND Computer Science', img: '/path-to-course-image3.jpg' },
    { id: 4, name: 'ND Multimedia Technology', img: '/path-to-course-image4.jpg' },
    { id: 5, name: 'ND Science Laboratory Technology', img: '/path-to-course-image5.jpg' }
  ],
  'School of Management and Business Studies': [
    { id: 6, name: 'ND Accountancy', img: '/path-to-course-image6.jpg' },
    { id: 7, name: 'ND Business Administration and Management', img: '/path-to-course-image7.jpg' }
  ],
  'School of Art and Design': [
    { id: 8, name: 'ND Printing Technology', img: '/path-to-course-image8.jpg' },
    { id: 9, name: 'ND Fashion Design and Clothing Technology', img: '/path-to-course-image9.jpg' }
  ]
};

const Coursespage = () => {
  return (
    <Container className="courses-page p-5">
      <h1 className="text-center mb-4">Our Courses</h1>
      {Object.keys(coursesData).map((school, idx) => (
        <div key={idx} className="mb-5">
          <h2 className="mb-3">{school}</h2>
          <Row>
            {coursesData[school].map(course => (
              <Col md={4} key={course.id} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src={course.img} />
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default Coursespage;
