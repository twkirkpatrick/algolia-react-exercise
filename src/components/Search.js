import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 mx-auto mt-2">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter a keyword..."
            />
            <button class="btn btn-dark" type="submit">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
