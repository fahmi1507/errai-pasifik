import React, { useState } from "react";
import { useSelector } from "react-redux";
import Links from "./Links";
import "./table.css";
const Table = () => {
  const search = useSelector((state) => state.search);
  const [ascending, setAscending] = useState(true);

  const handleClick = () => {
    setAscending(!ascending);
  };

  const sorted = search.sort((a, b) => {
    const isReversed = ascending ? 1 : -1;

    return isReversed * (a.id - b.id);
  });

  return (
    <div className="table__div">
      {search[0].id > 0 && (
        <table className="table table-bordered border-info mb-0">
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
            {sorted.map((e, i) => (
              <Links key={i} data={e} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
