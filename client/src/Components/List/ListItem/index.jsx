import React from "react";
// import "../../../restaurant_style.css";
import "./listItem.css";
import { Link } from "react-router-dom";
const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
 
  <div className="listItem">
    <img src={coverSrc} alt="item" />
    <header>
      <h4>{title}</h4>
      <span>⭐{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b>
      </p>
      <span>Delivery Fee ${deliveryFee}</span>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>

);

export default ListItem;
