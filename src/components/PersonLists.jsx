import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Actor from "./Actor";
import Politicians from "./Politicians";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
});

const data = [
  {
    id: "10",
    name: "Tom Cruise",
  },
  {
    id: "11",
    name: "Kevin Hart",
  },
  {
    id: "12",
    name: "Dwayne Jhonson",
  },
  {
    id: "13",
    name: "Jack Black",
  },
  {
    id: "14",
    name: "Bruce Willis",
  },
];

const politicians = [
  {
    id: "15",
    name: "Jokowi",
  },
  {
    id: "16",
    name: "Prabowo",
  },
  {
    id: "17",
    name: "Puan Maharani",
  },
  {
    id: "18",
    name: "Anies Baswedan",
  },
  {
    id: "19",
    name: "Rizal Ramli",
  },
];

const PersonLists = () => {
  const classes = useStyles();

  return (
    <TreeView className={classes.root} defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
      <TreeItem nodeId="1" label="Actor">
        <TreeItem nodeId="2" label="International">
          {data.map((e, i) => (
            <Actor key={i} data={e} />
          ))}
        </TreeItem>

        <TreeItem nodeId="3" label="Indonesia" />
      </TreeItem>
      <TreeItem nodeId="4" label="Scientist">
        <TreeItem nodeId="5" label="International" />
        <TreeItem nodeId="6" label="Indonesia" />
      </TreeItem>
      <TreeItem nodeId="7" label="Politicians">
        <TreeItem nodeId="8" label="International" />
        <TreeItem nodeId="9" label="Indonesia">
          {politicians.map((e, i) => (
            <Politicians key={i} data={e} />
          ))}
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default PersonLists;
