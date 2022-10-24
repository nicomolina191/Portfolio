import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { Banner } from './components/Banner/Banner.js';
import { Skills } from './components/Skills/Skills.js';
import { Projects } from './components/Projects/Projects.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className='skills'>
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
