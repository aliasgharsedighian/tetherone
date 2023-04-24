import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { useState } from "react";
// import Banner from "./Components/OwlCarousel/Banner";
// import Test from "./Components/OwlCarousel/Test";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="App">
      <Navbar setOpenMenu={setOpenMenu} />
      <Routes>
        <Route path="/" element={<Home openMenu={openMenu} />} />
        {/* <Route path="/test" element={<Banner />} /> */}
        {/* <Route path="/test2" element={<Test />} /> */}
      </Routes>
    </div>
  );
}

export default App;
