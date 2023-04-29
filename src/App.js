import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import NavbarEn from "./Components/English/NavbarEn/NavbarEn";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeEn from "./Components/English/HomeEn/HomeEn";
import HomeAr from "./Components/Arabi/HomeAr/HomeAr";
import { useEffect, useState } from "react";
import NavbarAr from "./Components/Arabi/NavbarAr/NavbarAr";
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
      ) : language === "EN" ? (
        <NavbarEn
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      ) : (
        <NavbarAr
          setOpenMenu={setOpenMenu}
          setLanguage={setLanguage}
          setTitle={setTitle}
        />
      )}
      <Routes>
        <Route path="/" element={<Home openMenu={openMenu} />} />
        <Route path="/en" element={<HomeEn openMenu={openMenu} />} />
        <Route path="/ar" element={<HomeAr openMenu={openMenu} />} />
      </Routes>
    </div>
  );
}

export default App;
