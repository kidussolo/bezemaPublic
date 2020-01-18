import { GET_ERRORS } from "./types";
import { axios } from "axios";

//User Login -> implement all api call to login with user data
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
