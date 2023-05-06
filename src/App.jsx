import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Competitive from "./pages/Competitive";
import Unlimited from "./pages/Unlimited";
import Creative from "./pages/Creative";
import Header from "./components/Header";

function App() {
  return (
    <div className="big-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Competitive" element={<Competitive />} />
        <Route path="Unlimited" element={<Unlimited />} />
        <Route path="Creative" element={<Creative />} />
      </Routes>
    </div>
  );
}

export default App;
