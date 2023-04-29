import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavbarEn from "./Components/English/NavbarEn/NavbarEn";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeEn from "./Components/English/HomeEn/HomeEn";
import { useEffect, useState } from "react";
// import Banner from "./Components/OwlCarousel/Banner";
// import Test from "./Components/OwlCarousel/Test";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [language, setLanguage] = useState("FA");
  const [title, setTitle] = useState("تتروان");

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="App">
      {/* <Navbar setOpenMenu={setOpenMenu} /> */}
      {language === "FA" ? (
        <Navbar
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      ) : (
        <NavbarEn
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      )}
      <Routes>
        <Route path="/" element={<Home openMenu={openMenu} />} />
        <Route path="/en" element={<HomeEn openMenu={openMenu} />} />
        <Route path="/ar" />
      </Routes>
    </div>
  );
}

export default App;
