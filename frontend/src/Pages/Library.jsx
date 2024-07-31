import { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import '../styles/Library.css';

const booksData = [
  { id: 1, title: 'Book 1', category: 'Science', price: 10, img: '/path-to-image1.jpg' },
  { id: 2, title: 'Book 2', category: 'Technology', price: 15, img: '/path-to-image2.jpg' },
  { id: 3, title: 'Book 3', category: 'Engineering', price: 20, img: '/path-to-image3.jpg' },
  // Add more books as needed
];

const categories = ['All', 'Science', 'Technology', 'Engineering', 'Mathematics'];

const LibraryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = booksData.filter(book =>
    (selectedCategory === 'All' || book.category === selectedCategory) &&
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="p-5">
      <h1 className="text-center mb-4">Library and Bookstore</h1>
      <Form className="mb-4">
        <Row>
          <Col md={8}>
            <Form.Control
              type="text"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
      </Form>
      <Row>
        {filteredBooks.map(book => (
          <Col md={4} key={book.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Category: {book.category}</Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Button variant="primary">Purchase</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LibraryPage;
