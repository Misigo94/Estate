import React from "react";
import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div>
      <div class="property-search-wrapper">
        <div class="form-group">
          <select class="select" name="Location" id="" placeholder="Location">
            <option class="option" value="Location">
              Location
            </option>
            <option class="option" value="">
              Lekki
            </option>
          </select>
        </div>

        <div class="form-group">
          <select
            class="select"
            name="Property Type"
            id=""
            placeholder="Location"
          >
            <option class="option" value="">
              Duplex
            </option>
            <option class="option" value="">
              Duplex
            </option>
          </select>
        </div>

        <div class="form-group">
          <select class="select" name="Max Price" id="" placeholder="Location">
            <option class="option" value="Location">
              Max Price
            </option>
            <option class="option" value="">
              $ 10,000
            </option>
          </select>
        </div>
        <button class="btn">
          {/* <img src={SearchIcon} />  */}
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
