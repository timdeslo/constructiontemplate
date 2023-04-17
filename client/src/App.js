import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";

const App = ()  => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
