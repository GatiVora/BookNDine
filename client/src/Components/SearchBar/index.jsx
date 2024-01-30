import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../restaurant_style.css";
const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon"></SearchIcon>
    <input
      type="text"
      placeholder="Search Restaurants.."
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
