import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  links: "",
  search: [{ id: "", title: "", link: "" }],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LINK:
      return { ...state, links: payload };
    case ActionTypes.SET_SEARCH:
      return { ...state, search: payload };

    default:
      return state;
  }
};
