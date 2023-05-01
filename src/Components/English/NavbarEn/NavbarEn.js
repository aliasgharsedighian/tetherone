import React, { useEffect, useRef, useState } from "react";
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

function NavbarEn({ setOpenMenu, setLanguage, setTitle }) {
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
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

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
      style={{ direction: "ltr" }}
      ref={menuRef}
      id="navbar-tag"
      className={
        navbarBgChange ? "navbar-container active" : "navbar-container"
      }
    >
      {/* when open the menu */}
      {/* when open the menu use ternary operator for name of the className */}
      <div
        className={
          sidebar ? "navbar-open-menu-en active" : "navbar-open-menu-en"
        }
      >
        <div className="navbar-open-menu-item">
          <HomeIcon className="navbar-icons" />
          <span>Home</span>
        </div>
        <div className="navbar-open-menu-item">
          <NewspaperIcon className="navbar-icons" />
          <span>Blog</span>
        </div>
        <div className="navbar-open-menu-item">
          <DocumentMagnifyingGlassIcon className="navbar-icons" />
          <span>User Guide</span>
        </div>
        <div className="navbar-open-menu-item">
          <DevicePhoneMobileIcon className="navbar-icons" />
          <span>App</span>
        </div>
        <div className="navbar-open-menu-item">
          <FaceSmileIcon className="navbar-icons" />
          <span>Invite Friends</span>
        </div>
        <div className="navbar-open-menu-item">
          <BuildingOffice2Icon className="navbar-icons" />
          <span>TetherOne Market</span>
        </div>
      </div>
      <div className="navbar-right-side">
        <div className="navbar-logo en" onClick={() => navigate("/en")}>
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
          <p>Home</p>
          <p>Blog</p>
          <p>User Guide</p>
          <p>App</p>
          <p>Invite Friends</p>
          <p>TetherOne Market</p>
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
            <Link className="hidden lg:inline-grid" href="/">
              FA{" "}
            </Link>
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
            <Link className="hidden lg:inline-grid" href="/en">
              {" "}
              EN
            </Link>
            <img className="w-[20px]" src="./images/flag/en.png" alt="EN" />|
          </div>
          <div
            onClick={() => {
              setLanguage("AR");
              navigate("/ar");
              setTitle("سوق صرف الدرهم عبر الإنترنت");
            }}
            className="change-language-single"
          >
            <Link className="hidden lg:inline-grid" href="/ar">
              EM
            </Link>
            <img className="w-[20px]" src="./images/flag/em.png" alt="Em" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <a
            className="flex gap-2 items-center justify-center"
            href="https://panel.bitnal.ir/signin/"
          >
            <UserIcon className="w-[20px]" />
            <p>SignUp/Login</p>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarEn;
