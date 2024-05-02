// import React, { useState , useEffect } from "react";
// // import "./List/ListItem/listItem.css";
// import "../../Restaurant_tab/List/ListItem/listItem.css";
// import List from "../../Restaurant_tab/List";
// import EmptyView from "../../Restaurant_tab/EmptyView";
// import { dataList } from "../../../constants";
// // import ListItem from "../../Restaurant_tab/List";

// import api from "../../../api";


// // const Recommend = () => {
// //   const [list, setList] = useState(dataList.slice(1, 5));
// //   const [resultFound, setResultFound] = useState(true);




// //   return (
// //     <div>
// //       <div className="home_list-wrap">
// //          {resultFound ? <List list={list} /> : <EmptyView />}
// //        </div> 
// //      </div>
// //   );
// // };

// // export default Recommend;

// const Recommend = () =>{

//   const [list, setList] = useState([]);
//   const [list2, setList2] = useState([]);

//   useEffect(() => {
//     api.get("/restaurants/")
//     .then(response => {
//       setList(response.data);
//       setList2(response.data);
 
//     })
//     .catch(error => {
//       console.error("Error fetching restaurants:", error);
    
//     });
//   }, []);

//   return(

//     <div className="home_list-wrap">
//           <List list={list2} /> 
//     </div>
//   );
// }

// export default Recommend;

import React, { useState, useEffect } from "react";
import "../../Restaurant_tab/List/ListItem/listItem.css";
import List from "../../Restaurant_tab/List";
import EmptyView from "../../Restaurant_tab/EmptyView";
import api from "../../../api";

const Recommend = () => {
  const [list, setList] = useState([]);

  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json');
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    };

    fetchCity();
  }, []);

  console.log(city);
  const cityy = "Nadiad";

  useEffect(() => {
    api.get(`/restaurants/city/${cityy}`)
      .then(response => {
        // Extract only the first 4 restaurants
        const firstFourRestaurants = response.data.slice(0, 4);
        setList(firstFourRestaurants);
      })
      .catch(error => {
        console.error("Error fetching restaurants:", error);
      });
  }, [city]);

  return (
    <div className="home_list-wrap">
      {list.length > 0 ? <List list={list} /> : <EmptyView />}
    </div>
  );
};

export default Recommend;
