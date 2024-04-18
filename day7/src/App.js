import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Project/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
    
  );
}

export default App;
