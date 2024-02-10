import React from "react";
import { Link } from "react-router-dom";
// import "../../../restaurant_style.css";
import "./listItem.css";
const ListItem = ({
  item: { id, coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
  <Link to={`/restaurant/${id}`} className="listItem-link">
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
  </Link>
);

export default ListItem;
