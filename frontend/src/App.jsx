
//import Navbarcomp from './Components/Navbarcomp';
import Navbar from './Components/Navbar';
import CustomCarousel from './Components/CustomCarousel';
import Section from './Components/Section';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
//import Layout from './Components/Layout';


const App = () => {
  return (
    <div >
      <Navbar />
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
      {/*<Navbarcomp />*/}
      
      </div>
  );
    
      
}

export default App;
