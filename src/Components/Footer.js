import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-wrap">
        <div class="footer-column">
          <h3 class="footer-header">Vallies Estate</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur <br />
            adipisicing elit
          </p>
        </div>

        <div class="footer-column">
          <h3 class="footer-header">Property</h3>
          <ul>
            <li class="footer-item">Learning Modules</li>
            <li class="footer-item">Partnerships</li>
            <li class="footer-item">Watching demo</li>
            <li class="footer-item">Event</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-header">About</h3>
          <ul>
            <li class="footer-item">Learning Modules</li>
            <li class="footer-item">Partnerships</li>
            <li class="footer-item">Watching demo</li>
            <li class="footer-item">Event</li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-header">Resources</h3>
          <ul>
            <li class="footer-item">Learning Modules</li>
            <li class="footer-item">Partnerships</li>
            <li class="footer-item">Watching demo</li>
            <li class="footer-item">Event</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
