import { GET_ITEMS, ADD_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";
import { returnErrors } from "./errorActions";
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("http://localhost:5000/api/user", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = data => (dispatch, getState) => {
  axios
    .post("http://localhost:5000/api/user", data)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
