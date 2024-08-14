import React from "react";
import { Fragment } from "react";
import logo from "../assets/Images/logo.jpeg";
import "../assets/Styles/headerstyle.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
const Header = () => {
  const cartcount = useSelector((state) => state.cartcount.cartcountnew);
  return (
    <Fragment>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logoname-container">
          <p className="logoname">VogueVista</p>
          <p className="line">|</p>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <p className="logoname2">Magazines</p>
          </Link>
        </div>
        <nav className="nav-items">
          <span class="material-symbols-outlined ">favorite</span>
          <p className="products">Products</p>
          <p className="document">About</p>
          <p className="article">
            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <IoCartSharp style={{ color: "black", fontSize: "20px" }} />
              <span className="count"></span>
            </Link>
          </p>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
