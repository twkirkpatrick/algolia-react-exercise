import { FETCH_ARTICLES } from "./types";

export const fetchArticles = (term) => async (dispatch) => {
  console.log(term);

  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${term}&tags=story`
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
