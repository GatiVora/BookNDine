import React from "react";
import FilterListToggle from "../FilterListToggle";
import { categoryList, ratingList } from "../../constants";
import "../../restaurant_style.css";
import { Checkbox } from "@material-ui/core";
import CheckboxProton from "../CheckboxProton";
const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
}) => {
  return (
    <div>
      <div className="input-group">
        {/* Category */}
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Ratings */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
      {/* Cuisine */}
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
