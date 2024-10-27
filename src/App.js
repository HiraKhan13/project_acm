import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyBooks from "./pages/MyBooks";
import HomeFooter from "./components/HomeFooter";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar on all pages except home ('/') and signup ('/signup') */}
      {location.pathname !== "/" && location.pathname !== "/signup" && (
        <Navbar />
      )}

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Conditionally render Footer or HomeFooter */}
      {location.pathname !== "/signup" ? (
        <Footer />
      ) : (
        location.pathname === "/" && <HomeFooter />
      )}
    </div>
  );
}

export default App;
