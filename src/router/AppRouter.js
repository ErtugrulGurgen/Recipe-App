import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Recipe-App/login" element={<Login />} />
        <Route path="Recipe-App/home" element={<Home />} />
        <Route path="Recipe-App/about" element={<About />} />
        <Route path="Recipe-App/details" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
