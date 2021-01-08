import { FETCH_ARTICLES, SAVE_TERM } from "../actions/types";

//initial application level state
const initialState = {
  articles: null,
  searchTerm: null
};

//exported function with a switch statement to take in the action types and manipulate state accordingly.

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      console.log("fetching");
      return {
        ...state,
        articles: action.payload
      };
    case SAVE_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };
    default:
      return state;
  }
};

export default articleReducer;
