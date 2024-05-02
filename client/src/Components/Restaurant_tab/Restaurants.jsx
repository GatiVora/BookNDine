import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import FilterPanel from "./FilterPanel";
import List from "./List";
import EmptyView from "./EmptyView";
import Navbar from "../User/HomePage/Navbar";
import api from "../../api"
import { useParams } from "react-router-dom"; // Import useParams hook


const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
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
  const { city } = useParams(); // Extract city from URL parameters

  // useEffect(() => {
   
  //   api.get(`/restaurants/city/${city}`)
  //   .then(response => {
  //     setList(response.data);
  //     setList2(response.data);
  //     setResultFound(true);
  //   })
  //   .catch(error => {
  //     console.error("Error fetching restaurants:", error);
  //     setResultFound(false);
  //   });
  // }, []);

  useEffect(() => {
    if (city) {
      api.get(`/restaurants/city/${city}`)
        .then(response => {
          setList(response.data);
          setList2(response.data);
          setResultFound(true);
        })
        .catch(error => {
          console.error("Error fetching restaurants:", error);
          setResultFound(false);
        });
    } else {
      // Call the API without filtering by city
      api.get(`/restaurants`)
        .then(response => {
          setList(response.data);
          setList2(response.data);
          setResultFound(true);
        })
        .catch(error => {
          console.error("Error fetching restaurants:", error);
          setResultFound(false);
        });
    }
  }, [city]);
  

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
    let updatedList = list;

    if (selectedRating) {
      updatedList = list.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
  // Filter by selected cuisines
  const cuisineChecked = cuisines
    .filter((item) => item.checked)
    .map((item) => item.label.toLowerCase());
  if (cuisineChecked.length) {
    updatedList = updatedList.filter((item) =>
      item.cuisine && cuisineChecked.includes(item.cuisine.toLowerCase())
    );
  }
    if (inputSearch) {
      updatedList = list.filter(
        (item) =>
          item.res_name.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
      console.log(updatedList);
    }
    setList2(updatedList);

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
          {resultFound ? <List list={list2} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
