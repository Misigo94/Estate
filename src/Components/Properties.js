import React from "react";
import Prop from "../assets/prop1.jpg";
import "../styles/Properties.css";

const Properties = () => {
  return (
    <div>
      <div className="property">
        <h2 className="property-title">Our Featured Properties</h2>
        <p className="property-text">
          One of our biggest producst to be featured and that has sold out the
          most
        </p>

        <div class="property-wrap">
          <div class="property-card">
            <img class="property-img" src={Prop} alt="" />

            <div class="card-body">
              <div class="prop-1">
                <h4 class="header">THE PALACE</h4>
                <p class="leki">Lekki phase2</p>
              </div>
              <div class="prop-2">
                <h4 class="duplex">Duplex</h4>
                <p class="cash">$2000</p>
              </div>
            </div>
          </div>

          <div class="property-card">
            <img class="property-img" src={Prop} alt="" />

            <div class="card-body">
              <div class="prop-1">
                <h4 class="header">THE PALACE</h4>
                <p class="leki">Lekki phase2</p>
              </div>
              <div class="prop-2">
                <h4 class="duplex">Duplex</h4>
                <p class="cash">$2000</p>
              </div>
            </div>
          </div>

          <div class="property-card">
            <img class="property-img" src={Prop} alt="" />

            <div class="card-body">
              <div class="prop-1">
                <h4 class="header">THE PALACE</h4>
                <p class="leki">Lekki phase2</p>
              </div>
              <div class="prop-2">
                <h4 class="duplex">Duplex</h4>
                <p class="cash">$2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
