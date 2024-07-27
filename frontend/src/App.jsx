import { Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import About from "./Pages/About";
import Admissions from "./Pages/Admissions";
import Blog from "./Pages/Blog";
import Library from "./Pages/Library";
import Printing from "./Pages/Printing";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Services from "./Pages/Services";
import UserSettings from "./Pages/Usersettings";
import Coursespage from "./Pages/Coursespage.jsx";




const App = () => {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/about' element={<About />} />
        <Route path='/api/admissions' element={<Admissions />} />
        <Route path='/api/blog' element={<Blog />} />
        <Route path='/api/library' element={<Library />} />
        <Route path='/api/printing' element={<Printing />} />
        <Route path='/api/dashboard' element={<Dashboard />} />
        <Route path='/api/login' element={<Login />} />
        <Route path='/api/signup' element={<Signup />} />
        <Route path='/api/services' element={<Services />} />
        <Route path='/api/userSettings' element={<UserSettings />} />
        <Route path='/api/coursespage' element={<Coursespage />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
