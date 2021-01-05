import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div>
      {article.title}
      {article.author}
      {article.created_at}
      <a href={article.url}>{article.url}</a>
    </div>
  );
};

export default ArticleItem;
