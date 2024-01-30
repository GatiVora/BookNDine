import ListItem from "./ListItem";
import React from "react";
import "../../restaurant_style.css";
const index = ({ list }) => (
  <div className="list-wrap">
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default index;
