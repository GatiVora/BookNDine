import React, { useState } from "react";
// import "./List/ListItem/listItem.css";
import "../../Restaurant_tab/List/ListItem/listItem.css";
import List from "../../Restaurant_tab/List";
import EmptyView from "../../Restaurant_tab/EmptyView";
import { dataList } from "../../../constants";

const Recommend = () => {
  const [list, setList] = useState(dataList.slice(1, 5));
  const [resultFound, setResultFound] = useState(true);

  return (
    <div>
      <div className="home_list-wrap">
        {resultFound ? <List list={list} /> : <EmptyView />}
      </div>
    </div>
  );
};

export default Recommend;
