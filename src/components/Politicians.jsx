import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/actions/action";
import { pSearch } from "../helpers/politicianSearch";

const Politicians = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = (name) => {
    const data = pSearch(name);

    dispatch(setSearch(data));
  };
  return <TreeItem onClick={() => handleClick(data.name)} nodeId={data.id} label={data.name} />;
};

export default Politicians;
