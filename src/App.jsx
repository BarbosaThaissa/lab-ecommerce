import React from "react";
//import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

//components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { GlobalStyled } from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </>
  );
};

export default App;
