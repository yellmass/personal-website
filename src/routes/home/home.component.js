import React from 'react';

import ppImage from "../../assets/pp.jpeg"

import './home.styles.css'

const Home = () => {
    

  return (
    <div className="home-container" >
        <img src={ppImage} alt="home-img" />
        <h1 className="intro-text" >Hi, I am Yilmaz</h1>
    </div>
  );
};

export default Home;
