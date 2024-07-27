

//import Navbar1 from './Components/Navbar1';
import CustomCarousel from '../Components/CustomCarousel';
import Section from '../Components/Section';
import Newsletter from '../Components/Newsletter';
import { Container } from "react-bootstrap";
import progress from '../assets/svgs/progress.png';
import Librarybro from '../assets/svgs/Librarybro.png';
import admissions from '../assets/svgs/admissions.png';
import Laboratory from '../assets/svgs/Laboratory.png';


const Home = () => {
  return (
    <div>
      <Container fluid className="p-0 no-margin">
        <CustomCarousel style={{ marginBottom: '0', padding: '0' }}/>
        <Section style={{ padding: '0', margin: '0' }}
          id="courses"
          title="Our Courses" 
          description="Explore a variety of courses designed to help you succeed." 
          buttonText="Learn More" 
          link="#"
          imageSrc={progress} 
        />
        <Section 
          id="library"
          title="Library & Book Store" 
          description="Access a wide range of books and resources." 
          buttonText="Explore Library" 
          link="#"
          imageSrc={Librarybro} 
          reverse
        />
        <Section 
          id="admissions"
          title="Admissions" 
          description="Join our community and start your journey today." 
          buttonText="Apply Now" 
          link="#"
          imageSrc={admissions} 
        />
        <Section 
          id="facilities"
          title="Facilities" 
          description="Discover our state-of-the-art facilities." 
          buttonText="View Facilities" 
          link="#"
          imageSrc={Laboratory} 
          reverse
        />
      </Container>
      <Newsletter />
      </div>
  );
    
      
}

export default Home;
