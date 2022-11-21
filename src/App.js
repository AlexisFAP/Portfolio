import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;