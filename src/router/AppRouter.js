import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
