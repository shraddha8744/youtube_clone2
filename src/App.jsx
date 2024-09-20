import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
// import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import PalyingVideo from "./pages/PalyingVideo";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PalyingVideo />} />
      </Routes>
    </div>
  );
};

export default App;
