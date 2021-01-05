import React from "react";
import { connect } from "react-redux";
import ArticleItem from "./ArticleItem";

const Articles = ({ article }) => {
  const { articles } = article;

  if (articles === null) {
    return null;
  } else {
    return (
      <div>
        {articles.map((article) => (
          <ArticleItem article={article} />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  article: state.article,
});

export default connect(mapStateToProps, {})(Articles);
