import { FETCH_ARTICLES, SAVE_TERM, SET_LOADING } from "./types";

//fetchArticles action used to hit the API endpoint and dispatch the data to the reducer
export const fetchArticles = (term) => async (dispatch) => {
  console.log(term);

  try {
    setLoading();
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${term}&tags=story`
    );
    const data = await res.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: data.hits
    });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

//saveTerm action used to capture the user's search term and save it to the redux state
export const saveTerm = (term) => async (dispatch) => {
  dispatch({
    type: SAVE_TERM,
    payload: term
  });
};
