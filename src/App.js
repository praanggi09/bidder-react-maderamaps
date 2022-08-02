import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import BrowserPage from "./pages/BrowserPage";
import Header from "./parts/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse-by" element={<BrowserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
