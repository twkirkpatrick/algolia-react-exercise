import { FETCH_ARTICLES, SAVE_TERM } from "./types";

//fetchArticles action used to hit the API endpoint and dispatch the data to the reducer
export const fetchArticles = (term) => async (dispatch) => {
  try {
    //utilizing a try-catch and async-await to handle the API call. User's search term is passed as an argument and inserted into the query string.
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${term}&tags=story`
    );
    const data = await res.json();

    //dispatch the API results to the reducer
    dispatch({
      type: FETCH_ARTICLES,
      payload: data.hits
    });
  } catch (err) {
    console.log(err);
  }
};

//saveTerm action used to capture the user's search term and save it to the redux state
export const saveTerm = (term) => async (dispatch) => {
  dispatch({
    type: SAVE_TERM,
    payload: term
  });
};
