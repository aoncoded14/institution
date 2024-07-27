import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Ensure you're using React Router

const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-0" style={{ position: "relative", zIndex: 1000 }} data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">ISTM</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api/services">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api/blog">Blog</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserCircle size={24} />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" style={{ zIndex: 1100 }}>
                <li><Link className="dropdown-item" to="/api/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><a className="dropdown-item" href="/api/userSettings">Settings</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
