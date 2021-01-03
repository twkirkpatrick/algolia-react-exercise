import React, { useState } from "react";
import { fetchArticles } from "../actions/articleActions";
import { connect } from "react-redux";

const Search = ({ fetchArticles }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const searchTerm = term;
    fetchArticles(searchTerm);
  };
  return (
    <div className="row">
      <div className="col-6 mx-auto mt-2">
        <form onSubmit={onSubmit} class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a keyword..."
            onChange={(e) => e.target.value}
            value={term}
            name="term"
          />
          <button className="btn btn-dark" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { fetchArticles })(Search);
