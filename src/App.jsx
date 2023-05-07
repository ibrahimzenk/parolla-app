import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Competitive from "./pages/Competitive";
import Unlimited from "./pages/Unlimited";
import Creative from "./pages/Creative";
import Header from "./components/Header";
import Rooms from "./pages/Creative/Rooms";
import CreateRoom from "./pages/Creative/CreateRoom";
import MyRooms from "./pages/Creative/MyRooms";

function App() {
  return (
    <div className="big-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="competitive" element={<Competitive />} />
        <Route path="unlimited" element={<Unlimited />} />
        <Route path="creative" element={<Creative />} />
        <Route path="creative/rooms" element={<Rooms />} />
        <Route path="creative/createroom" element={<CreateRoom />} />
        <Route path="creative/myrooms" element={<MyRooms />} />
      </Routes>
    </div>
  );
}

export default App;
