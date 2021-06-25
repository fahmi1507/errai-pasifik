import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { setSearch } from "../redux/actions/action";
import Links from "./Links";
import "./table.css";
const Table = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = () => {
    const x = search.sort(function (a, b) {
      if (a.link < b.link) {
        return -1;
      }
      if (a.link > b.link) {
        return 1;
      }
      return 0;
    });

    dispatch(setSearch([{ id: "", title: "", link: "" }]));
    dispatch(setSearch(x));
  };

  return (
    <div className="table__div">
      {search[0].id > 0 && (
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th style={{ cursor: "pointer" }} onClick={() => handleClick()} scope="col">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {search.map((e, i) => (
              <Links key={i} data={e} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
