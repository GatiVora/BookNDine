import React, { useState } from "react";
import "./List/ListItem/listItem.css";
import List from "./List";
import EmptyView from "./EmptyView";
import { dataList } from "../constants";

const Recommend = () => {
  const [list, setList] = useState(dataList.slice(0, 4));
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
