import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import FilterPanel from "./FilterPanel";
import List from "./List";
import EmptyView from "./EmptyView";
import "../restaurant_style.css";
import Navbar from "./Navbar";
import { dataList } from "../constants";
const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState("");
  const [resultFound, setResultFound] = useState(false);
  const [cuisines, setCuisines] = useState([
    {
      id: 1,
      checked: false,
      label: "Gujarati",
    },
    {
      id: 2,
      checked: false,
      label: "Punjabi",
    },
    {
      id: 3,
      checked: false,
      label: "American",
    },
    {
      id: 4,
      checked: false,
      label: "Marathi",
    },
  ]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handelChangeChecked = (id) => {
    const cuisinesStateList = cuisines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const applyFilter = () => {
    let updatedList = dataList;

    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    const cuisineChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }
    setList(updatedList);

    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cuisines, inputSearch]);

  return (
    <div className="home">
      <Navbar />
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changeChecked={handelChangeChecked}
          />
        </div>
        <div className="home_list-wrap">
          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
