import { POST } from "../types";

export const loadPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST.FETCH_REQUEST,
    });
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    const resBody = await res.json();
    return dispatch({ type: POST.FETCH_SUCCESS, data: resBody });
  } catch (e) {
    return dispatch({ type: POST.FETCH_ERROR, message: e });
  }
};
