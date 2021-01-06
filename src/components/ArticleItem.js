import React from "react";
import Moment from "react-moment";

const ArticleItem = ({ article: { title, author, created_at, url } }) => {
  //ArticleItem component used to render a card displaying the article information.
  //The title, author, created_at, and url properties of each article are destructured above for easy access and cleaner code.
  return (
    <div className="row">
      <div className="col-6 mx-auto">
        <div className="card text-center border-secondary mb-3">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <h4 className="card-text">
              <i className="far fa-user-circle"></i>
              {author}
            </h4>
            <h6 className="card-text">
              {/*utilized the react-moment package to format the date of the article*/}
              <Moment format="MM/DD/YYYY">{created_at}</Moment>
            </h6>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning"
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
