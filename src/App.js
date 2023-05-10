
import './App.css';
import { Aboutme } from './component/AboutMe/Aboutme';
import Contactme from './component/ContactMe/Contactme';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Resume from './component/Resume/Resume';
import Testimonial from './component/Testimonial/Testimonial';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Home />

      <Aboutme />

      <Resume />

      <Testimonial />

      <Contactme />
      
    </div>
  );
}

export default App;
