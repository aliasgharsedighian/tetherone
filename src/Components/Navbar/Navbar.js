import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { UserIcon, Bars3Icon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  NewspaperIcon,
  DocumentMagnifyingGlassIcon,
  FaceSmileIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenMenu }) {
  const [navbarBgChange, setNavbarBgChange] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  let menuRef = useRef(null);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBgChange(true);
    } else {
      setNavbarBgChange(false);
    }
  };

  //use cleanup function in useEffect hook for addEventListener for better performance
  window.addEventListener("scroll", changeBackground);

  const openMenuHandle = () => {
    setOpenMenu((prev) => !prev);
    setSidebar(!sidebar);
    if (navbarBgChange === false) {
      setNavbarBgChange(true);
    }
    if (
      navbarBgChange === true &&
      window.scrollY < 80 &&
      window.screenX >= 400
    ) {
      setNavbarBgChange(false);
    }
  };

  useEffect(() => {
    let handler = (e) => {
      if (menuRef?.current && !menuRef.current.contains(e.target)) {
        setSidebar(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef, sidebar]);

  return (
    <nav
      ref={menuRef}
      id="navbar-tag"
      className={
        navbarBgChange ? "navbar-container active" : "navbar-container"
      }
    >
      {/* when open the menu */}
      {/* when open the menu use ternary operator for name of the className */}
      <div className={sidebar ? "navbar-open-menu active" : "navbar-open-menu"}>
        <div className="navbar-open-menu-item">
          <HomeIcon className="navbar-icons" />
          <span>خانه</span>
        </div>
        <div className="navbar-open-menu-item">
          <NewspaperIcon className="navbar-icons" />
          <span>بلاگ</span>
        </div>
        <div className="navbar-open-menu-item">
          <DocumentMagnifyingGlassIcon className="navbar-icons" />
          <span>راهنمای استفاده</span>
        </div>
        <div className="navbar-open-menu-item">
          <DevicePhoneMobileIcon className="navbar-icons" />
          <span>اپلیکیشن</span>
        </div>
        <div className="navbar-open-menu-item">
          <FaceSmileIcon className="navbar-icons" />
          <span>دعوت دوستان</span>
        </div>
        <div className="navbar-open-menu-item">
          <BuildingOffice2Icon className="navbar-icons" />
          <span>بازار تتروان</span>
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <Bars3Icon onClick={openMenuHandle} className="navbar-menu-icon" />
          <img
            className="cursor-pointer"
            src={
              navbarBgChange
                ? "http://localhost:3000/images/home/logo-navbar2.png"
                : "http://localhost:3000/images/home/logo-navbar2.png"
            }
            alt=""
          />
        </div>

        <div className="navbar-links">
          <p>خانه</p>
          <p>بلاگ</p>
          <p>راهنمای استفاده</p>
          <p>اپلیکیشن</p>
          <p>دعوت دوستان</p>
          <p>بازار تتروان</p>
        </div>
      </div>

      <div className="navbar-user gap-6">
        <div className="flex text-sm gap-3">
          <a href="#">FA </a>
          <img className="w-[20px]" src="./images/flag/ir.png" alt="FA" />|
          <a href="#"> EN</a>
          <img className="w-[20px]" src="./images/flag/en.png" alt />|
          <a href="#">EM</a>
          <img className="w-[20px]" src="./images/flag/em.png" />
        </div>
        <div className="flex justify-center items-center gap-1">
          <UserIcon className="w-[20px]" />
          <p>ورود/ثبت نام</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
