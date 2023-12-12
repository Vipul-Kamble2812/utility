import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx';
import Education from './components/Education.jsx';
import Technologies from './components/Technologies.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <>
        <NavBar />
        <Home />
        <Education />
        <Technologies />
        <Projects />
        <Footer />
      </>
    </div>
  );
}

export default App;
