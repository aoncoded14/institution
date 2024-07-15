import Carousel from 'react-bootstrap/Carousel';
import '../styles/CustomCarousel.css';
import welcome from '../assets/svgs/welcome.png';
import examsbro from '../assets/svgs/examsbro.png';
import printing1 from '../assets/svgs/printing1.png';

const CustomCarousel = () => {
  return (
    <Carousel id="home">
      <Carousel.Item>
        <img className="d-block w-100" src={welcome} alt="Welcome" />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p><a className="btn btn-dark" href="#welcome">Go to Welcome</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={examsbro} alt="Admissions Now" />
        <Carousel.Caption>
          <h3>Admissions Now</h3>
          <p><a className="btn btn-dark" href="#admissions">Go to Admissions</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={printing1} alt="Printing Services" />
        <Carousel.Caption>
          <h3>Printing Services</h3>
          <p><a className="btn btn-dark" href="#printing">Go to Printing Services</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
