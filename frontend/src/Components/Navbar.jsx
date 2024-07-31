import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.css";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand font-weight-bold" href="#">ICTM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ScrollLink className="nav-link" to="home" smooth={true}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="about" smooth={true}>About Us</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="services" smooth={true}>Our Services</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" to="blog" smooth={true}>Blog</ScrollLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon mx-2" />
          <FontAwesomeIcon icon={faBell} className="notification-icon mx-2" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
