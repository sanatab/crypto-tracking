import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

function Header() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") !== "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <h1>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
          <input checked={darkMode} className="dark_mode_input" type="checkbox" id="darkmode-toggle" onClick={() => changeMode()}/>
          <label className="dark_mode_label" for="darkmode-toggle">
            <Moon />
            <Sun />
          </label>
        <Link to={"/"}>
          <p className="link">Home</p>
        </Link>
        <Link to={"/compare"}>
          <p className="link">Compare</p>
        </Link>
        <Link to={"/watchlist"}>
          <p className="link">Watchlist</p>
        </Link>
        <Link to={"/dashboard"}>
          <Button text={"dashboard"} />
        </Link>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
