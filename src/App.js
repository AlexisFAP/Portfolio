import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Home from './pages/home/home'
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/projects' element={<Projects/>} />
          <Route exact path='/about-me' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;