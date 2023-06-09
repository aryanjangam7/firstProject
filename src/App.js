import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import NavBar from './pages/NavBar';


function App() {
  return (
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/projects' element={<Projects></Projects>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
