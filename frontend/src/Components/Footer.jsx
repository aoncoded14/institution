
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container text-center">
        <p>&copy; 2023 ISTM. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon facebook"><FaFacebook /></a>
          <a href="#" className="social-icon twitter"><FaTwitter /></a>
          <a href="#" className="social-icon instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
