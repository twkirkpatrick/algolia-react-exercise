import React from "react";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";

const Articles = ({ articles }) => {
  console.log(articles.articles);

  if (articles.articles === null) {
    return null;
  } else {
    return (
      <div>
        {articles.articles.map((article) => (
          <ArticleItem article={article} />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, {})(Articles);

//const {author, created_at, points, title, }
