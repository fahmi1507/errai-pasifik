import { ActionTypes } from "../constants/actionTypes";

export function setLink(link) {
  return {
    type: ActionTypes.SET_LINK,
    payload: link,
  };
}

export function setSearch(data) {
  return {
    type: ActionTypes.SET_SEARCH,
    payload: data,
  };
}
