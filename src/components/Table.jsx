import React from "react";
import { useSelector } from "react-redux";
import Links from "./Links";

const Table = () => {
  const search = useSelector((state) => state.search);

  return (
    <div style={{ minHeight: 150 }}>
      {search[0].id > 0 && (
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Link</th>
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
