import React from 'react'
import { BrowserRouter,Routes, Route, useLocation} from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyBooks from './pages/MyBooks';
import HomeFooter from './components/HomeFooter';
import Login from './components/Login';

function App() {

  const location = useLocation()

  return (
    <div>
      {location.pathname !=='/' && <Navbar/>}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mybooks" element={<MyBooks/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
      {location.pathname !=='/' ? <Footer/>:<HomeFooter/>}
    </div>
  );
}

export default App;
