import React, { Component } from "react";
import { fetchArticles } from "../actions/articleActions";
import { connect } from "react-redux";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const term = this.state.term;
    this.props.fetchArticles(term);
  }
  render() {
    return (
      <div className="row">
        <div className="col-6 mx-auto mt-2">
          <form onSubmit={this.onSubmit} class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a keyword..."
              onChange={this.onChange}
              value={this.state.term}
              name="term"
            />
            <button className="btn btn-dark" type="submit">
              SEARCH
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { fetchArticles })(Search);
