

//import Navbar1 from './Components/Navbar1';
import CustomCarousel from './CustomCarousel';
import Section from './Section';
import Newsletter from './Newsletter';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <CustomCarousel />
      <Section
        id="courses" 
        title="Courses" 
        description="Explore our wide range of courses."
        svgUrl="assets/svgs/sample1.svg" 
        buttonText="Learn More"
        link="#"
      />
      <Newsletter />
      <Footer />
      </div>
  );
    
      
}

export default Home;
