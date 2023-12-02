import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../../assets/home-icon.svg";

import "./navbar.styles.css";
import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <Link to="/" className="home-logo-container">
          <HomeLogo className="home-logo" />
        </Link>
        <div className="navlinks">
          <Link to="/about" className="navlink">
            About Me
          </Link>
          <Link to="/projects" className="navlink">
            My Projects
          </Link>
          <Link to="/contact" className="navlink">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
