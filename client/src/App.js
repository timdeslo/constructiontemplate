import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./pages/Header";
import GlobalStyles from "./GlobalStyles";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = ()  => {
  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
      <Header />
        <Routes>
          <Route path="/constructiontemplate" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
