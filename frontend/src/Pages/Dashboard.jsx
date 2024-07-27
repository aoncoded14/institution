
import { Link } from 'react-router-dom';
import { FaBook, FaUserGraduate, FaMoneyBillWave, FaRegAddressBook } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Student Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaUserGraduate size={40} />
              <Card.Title className="mt-2">Profile</Card.Title>
              <Card.Text>
                View and update your personal information.
              </Card.Text>
              <Link to="/profile" className="btn btn-primary">Go to Profile</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaBook size={40} />
              <Card.Title className="mt-2">Course Registration</Card.Title>
              <Card.Text>
                Register for new courses and manage your enrollments.
              </Card.Text>
              <Link to="/courses" className="btn btn-primary">Register Courses</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaRegAddressBook size={40} />
              <Card.Title className="mt-2">Library</Card.Title>
              <Card.Text>
                Access the library catalog and borrow books.
              </Card.Text>
              <Link to="/library" className="btn btn-primary">Explore Library</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <FaMoneyBillWave size={40} />
              <Card.Title className="mt-2">Fee Payment</Card.Title>
              <Card.Text>
                View and pay your school fees.
              </Card.Text>
              <Link to="/fees" className="btn btn-primary">Pay Fees</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
