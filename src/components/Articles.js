import React from "react";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";

const Articles = ({ article: { articles } }) => {
  if (articles === null) {
    return null;
  }
  //If no articles are currently in state, return null.  Else, map over the articles in state (data returned from API), and render an ArticleItem component for each article
  return (
    <div>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

//mapStateToProps function to bring in the article state as a prop, giving us access to the application level state
const mapStateToProps = (state) => ({
  article: state.article
});

//exporting the connect function, with the mapToStateProps function being passed as a parameter.
export default connect(mapStateToProps)(Articles);
