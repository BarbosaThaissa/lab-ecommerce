import React from "react";
//import react router dom
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

//components
import Footer from "./components/Footer";
import SidebarProvider from "./contexts/SidebarContext";

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
        <Footer />
      </Router>
    </>
  );
};

export default App;
