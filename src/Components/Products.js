import React from "react";
import "../styles/Products.css";
// import Location from "@mui/icons-material";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import LockIcon from "@mui/icons-material/Lock";
import Choose from "../assets/heroi.jpg";
const Products = () => {
  return (
    <div>
      <h2 className="our-products">Our Products </h2>
      <h2 className="our-works"> how it works</h2>
      <h5 className="prod">This is our Products</h5>

      <div class="products-wrapper">
        <div class="products-item text-center">
          {/* <img src={Location} /> */}
          <h3 className="home">Find Home</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            dolore consequuntur placeat iste perspiciatis expedita! Laudantium
            omnis quis sed!
          </p>
        </div>

        <div class="products-item text-center">
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <h3>Make Payments</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            dolore consequuntur placeat iste perspiciatis expedita! Laudantium
            omnis quis sed!
          </p>
        </div>

        <div class="products-item text-center">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <h3 className="official">Make it official</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            dolore consequuntur placeat iste perspiciatis expedita! Laudantium
            omnis quis sed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
