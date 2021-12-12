import { POST } from "../types";

const InitState = {
  loading: true,
  success: false,
  message: null,
  data: null,
};

export default function postReducer(state = InitState, action) {
  switch (action.type) {
    case POST.FETCH_REQUEST:
      return {
          ...state,
          loading: true,
      };
    case POST.FETCH_SUCCESS:
      return {
          ...state,
          loading: false,
          success: true,
          data: action.data
      };
    case POST.FETCH_ERROR:
      return state;
    default:
      return state;
  }
}
