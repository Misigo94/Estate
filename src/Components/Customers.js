import React from "react";
import "../styles/Customers.css";

const Customers = () => {
  return (
    <div>
      <h2 className="customer-title">Our Esteemed Customers</h2>
      <br />
      <p className="customer-text">This is what our clients are saying</p>
      <div class="customer-wrap">
        <div class="customer-item">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p class="ct-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dicta vero error incidunt eos autem praesentium veritatis tenetur
            voluptatum quod?
          </p>
        </div>
        <div class="customer-item">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p class="ct-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dicta vero error incidunt eos autem praesentium veritatis tenetur
            voluptatum quod?
          </p>
        </div>
        <div class="customer-item">
          <h4>Alex Godwin</h4>
          <h5>South Africa</h5>
          <p class="ct-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            dicta vero error incidunt eos autem praesentium veritatis tenetur
            voluptatum quod?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
