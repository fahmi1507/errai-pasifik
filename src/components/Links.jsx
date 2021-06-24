import React from "react";
import { useDispatch } from "react-redux";
import { setLink } from "../redux/actions/action";

const Links = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLink(data.link));
  };

  return (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      <td>
        <p className="mb-0" onClick={() => handleClick()} style={{ cursor: "pointer" }}>
          {data.link}
        </p>
      </td>
    </tr>
  );
};

export default Links;
