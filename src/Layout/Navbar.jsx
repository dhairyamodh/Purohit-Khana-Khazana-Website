import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <div>
              <img
                src="assets/img/logo1.jpeg"
                alt="logo"
                className="sitename"
              />
            </div>
          </Link>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className={currentPath === "/" ? "active" : ""}>
                  Home
                  <br />
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={currentPath === "/aboutus" ? "active" : ""}
                >
                  About
                </Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/menu"
                  className={currentPath.startsWith("/menu") ? "active" : ""}
                >
                  <span>Menu</span>
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul>
                  <li>
                    <Link
                      to="/pickup-menu"
                      className={currentPath === "/pickup-menu" ? "active" : ""}
                    >
                      Pickup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/railway-menu"
                      className={
                        currentPath === "/railway-menu" ? "active" : ""
                      }
                    >
                      Railway-Menu
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={currentPath === "/contact" ? "active" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
