import React from "react";
import Moment from "react-moment";

const ArticleItem = ({ article }) => {
  const { title, author, created_at, url } = article;
  return (
    <div className="row">
      <div className="col-6 mx-auto">
        <div class="card text-center  mb-2">
          <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <h4 class="card-text">
              <i class="far fa-user-circle"></i>
              {author}
            </h4>
            <h6 class="card-text">
              <Moment format="MM/DD/YYYY">{created_at}</Moment>
            </h6>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              class="btn btn-warning"
            >
              View Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
