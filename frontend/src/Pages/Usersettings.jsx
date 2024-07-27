import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const UserSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [notifications, setNotifications] = useState(true);

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    // Handle personal info update logic here
  };

  const handlePasswordChangeSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
  };

  const handleNotificationChange = (e) => {
    setNotifications(e.target.checked);
    // Handle notification settings update logic here
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">User Settings</h2>
          
          <Form onSubmit={handlePersonalInfoSubmit}>
            <h4>Personal Information</h4>
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

            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>

          <hr className="my-5" />

          <Form onSubmit={handlePasswordChangeSubmit}>
            <h4>Change Password</h4>
            <Form.Group controlId="formCurrentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formConfirmNewPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Change Password
            </Button>
          </Form>

          <hr className="my-5" />

          <Form>
            <h4>Notification Settings</h4>
            <Form.Check 
              type="switch"
              id="notifications-switch"
              label="Receive Email Notifications"
              checked={notifications}
              onChange={handleNotificationChange}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserSettings;
