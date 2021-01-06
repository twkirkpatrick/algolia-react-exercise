import React, { useState } from "react";
import { fetchArticles, saveTerm } from "../actions/articleActions";
import { connect } from "react-redux";

//Search component that takes in the article actions as props

const Search = ({ fetchArticles, saveTerm }) => {
  const [term, setTerm] = useState("");

  //onSubmit function to pass the search term to the fetchArticles action for the API call and to put the term into redux state.
  const onSubmit = (e) => {
    e.preventDefault();
    const searchTerm = term;
    fetchArticles(searchTerm);
    saveTerm(term);
  };

  //onChange function to handle form functionality.
  const onChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="row">
      <div className="col-6 mx-auto mt-2">
        <form onSubmit={onSubmit} class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a keyword..."
            onChange={onChange}
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

//mapStateToProps function used to bring in the initial article state

const mapStateToProps = (state) => ({
  article: state.article
});
//exporting the connect function, with the mapToStateProps function being passed as a parameter as well as the articleActions (fetchArticles & saveTerm)
export default connect(mapStateToProps, { fetchArticles, saveTerm })(Search);
