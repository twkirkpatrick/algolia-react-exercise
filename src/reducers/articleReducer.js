import { FETCH_ARTICLES, SAVE_TERM, SET_LOADING } from "../actions/types";

//initial application level state
const initialState = {
  articles: null,
  loading: false,
  searchTerm: null
};

//exported function with a switch statement to take in the action types and manipulate state accordingly.

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SAVE_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
}
