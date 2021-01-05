import { FETCH_ARTICLES } from "./types";

export const fetchArticles = (term) => async (dispatch) => {
  console.log(term);

  try {
    const res = await fetch(
      `http://hn.algolia.com/api/v1/search?query=${term}&tags=story`
    );
    const data = await res.json();

    dispatch({
      type: FETCH_ARTICLES,
      payload: data.hits,
    });
  } catch (err) {
    console.log(err);
  }
};
