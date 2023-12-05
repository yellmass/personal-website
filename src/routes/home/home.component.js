import React from "react";

import homeImage from "../../assets/homepage-hawaii.jpeg";

import "./home.styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <img className="home-img" src={homeImage} alt="home-img" />
      <div classNAme="text-zone">
        <h1 className="intro-text">Hi, <br />I am Yilmaz<br />A web developer</h1>
        <Link to="/contact" >CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
