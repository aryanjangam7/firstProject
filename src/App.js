import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import NavBar from './NavBar';


function App() {
  return (
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
