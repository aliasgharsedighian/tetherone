import React, { useEffect, useRef, useState } from "react";
import "./NavbarAr.css";
import { UserIcon, Bars3Icon } from "@heroicons/react/20/solid";
import {
  HomeIcon,
  NewspaperIcon,
  DocumentMagnifyingGlassIcon,
  FaceSmileIcon,
  BuildingOffice2Icon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

function NavbarAr({ setOpenMenu, setLanguage, setTitle }) {
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
          <span>الصفحة الرئيسية</span>
        </div>
        <div className="navbar-open-menu-item">
          <NewspaperIcon className="navbar-icons" />
          <span>مدونة</span>
        </div>
        <div className="navbar-open-menu-item">
          <DocumentMagnifyingGlassIcon className="navbar-icons" />
          <span>دليل المستخدم</span>
        </div>
        <div className="navbar-open-menu-item">
          <DevicePhoneMobileIcon className="navbar-icons" />
          <span>التطبيق</span>
        </div>
        <div className="navbar-open-menu-item">
          <FaceSmileIcon className="navbar-icons" />
          <span>ادعو أصدقاء</span>
        </div>
        <div className="navbar-open-menu-item">
          <BuildingOffice2Icon className="navbar-icons" />
          <span>TetherOne</span>
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="navbar-logo" onClick={() => navigate("/ar")}>
          <Bars3Icon onClick={openMenuHandle} className="navbar-menu-icon" />
          <img
            className="cursor-pointer"
            src={
              navbarBgChange
                ? "/images/home/En-logo-green.png"
                : "/images/home/En-logo-green.png"
            }
            alt=""
          />
        </div>

        <div className="navbar-links">
          <p>الصفحة الرئيسية</p>
          <p>مدونة</p>
          <p>دليل المستخدم</p>
          <p>التطبيق</p>
          <p>ادعو أصدقاء</p>
          <p>TetherOne</p>
        </div>
      </div>

      <div className="navbar-user gap-6">
        <div className="flex text-sm gap-3">
          <div
            onClick={() => {
              setLanguage("FA");
              navigate("/");
              setTitle("تتروان");
            }}
            className="change-language-single"
          >
            <Link href="/">FA </Link>
            <img className="w-[20px]" src="./images/flag/ir.png" alt="FA" />|
          </div>
          <div
            onClick={() => {
              setLanguage("EN");
              navigate("/en");
              setTitle("TetherOne");
            }}
            className="change-language-single"
          >
            <Link href="/en"> EN</Link>
            <img className="w-[20px]" src="./images/flag/en.png" alt />|
          </div>
          <div
            onClick={() => {
              setLanguage("AR");
              navigate("/ar");
              setTitle("سوق صرف الدرهم عبر الإنترنت");
            }}
            className="change-language-single"
          >
            <Link href="/ar">EM</Link>
            <img className="w-[20px]" src="./images/flag/em.png" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <a
            className="flex gap-2 items-center justify-center"
            href="https://panel.bitnal.ir/signin/"
          >
            <UserIcon className="w-[20px]" />
            <p>إنشاء حساب / تسجيل الدخول</p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAr;
