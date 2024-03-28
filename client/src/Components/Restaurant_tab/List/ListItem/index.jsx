import React from "react";
import { Link } from "react-router-dom";
// import "../../../restaurant_style.css";
import "./listItem.css";
// import { Link } from "react-router-dom";
const ListItem = ({
  item: { id, res_name, rating ,city,address},
}) => (
 
  <Link to={`/restaurant/${id}`} className="listItem-link">
    <div className="listItem">
      <img src={"http://127.0.0.1:8000/restaurants/"+ id + "/image"} alt="item" />
      <header>
        <h4>{res_name}</h4>
        <h6>{address}, {city}</h6>
        <span>⭐{rating}</span>
      </header>
      <footer>
        <p>
          {/* <b>{serviceTime}</b> */}
        </p>
        {/* <span>Delivery Fee ${deliveryFee}</span> */}
        <p>
          {/* <b>${price}</b> */}
        </p>
      </footer>
    </div>

  </Link>
);

export default ListItem;
