import './App.css';
import Main from './components/layout/Main';
import { Routes, Route } from 'react-router-dom';
import Membership from './components/pages/Membership';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Blog from './components/pages/Blog';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Main />}>
            <Route path='home' element= {<Home />} />
            <Route path='about' element= {<About />} />
            <Route path='gallery' element= {<Gallery />} />
            <Route path='blog' element= {<Blog />} />
            <Route path='contact' element= {<Contact />} />
            <Route path='membership' element= {<Membership />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
