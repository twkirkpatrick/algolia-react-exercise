import { FETCH_ARTICLES } from "./types";

export const fetchArticles = (term) => (dispatch) => {
  console.log(term);
  fetch(`http://hn.algolia.com/api/v1/search?query=${term}&tags=story`)
    .then((res) => res.json())
    .then((articles) => console.log(articles));
};
