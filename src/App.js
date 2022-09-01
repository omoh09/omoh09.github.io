// import logo from './logo.svg';
import './App.css';
import NavBar from './components/About/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
// import Project from './pages/Project';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
      {/* <Project /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
