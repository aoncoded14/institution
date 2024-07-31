import Carousel from "react-bootstrap/Carousel";
import "../styles/CustomCarousel.css";
import welcome1 from "../assets/svgs/welcome1.png";
import ictm from "../assets/svgs/ictm.png";
import admission from "../assets/svgs/admission.png";
import printing from "../assets/svgs/printing.png";

const CustomCarousel = () => {
  return (
    <Carousel id="home" className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ictm}
          alt="Home"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={welcome1}
          alt="Welcome"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>
            <a className="btn btn-dark" href="#welcome">
              Welcome Back
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={admission}
          alt="Admissions Now"
        />
        <Carousel.Caption>
          <h3>Admissions Now</h3>
          <p>
            <a className="btn btn-dark" href="#admissions">
              Go to Admissions
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={printing}
          alt="Printing Services"
        />
        <Carousel.Caption>
          <h3>Printing Services</h3>
          <p>
            <a className="btn btn-dark" href="#printing">
              Go to Printing Services
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
