import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/AboutMe";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
function App() {
  return (
    <>
      <Particles className="particles-canvas"/>  
      <Navbar/> 
      <Header/>
      <About/>
      <Services/>
      <Experience/>
    </>
  );
}

export default App;
