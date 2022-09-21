import React from "react";
import heroImage from "../assets/hero.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2 className="hero-title">
          Helping you find the <br />
          property of your
          <br /> dreams.
        </h2>
        <p class="hero-text">
          creating quality urban lifestyles,
          <br />
          building stronger communities.
        </p>
        <button className="learn">Learn More</button>
      </div>
      <div className="right">
        <img className="hero-image" src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
