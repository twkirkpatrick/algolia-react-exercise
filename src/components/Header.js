import React, { Component } from "react";
import hacker from "../hacker.png";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 mx-auto">
          <div class="card mt-5">
            <div class="card-body">
              <h5 class="card-title text-center">Hacker News Search</h5>
            </div>
          </div>
          <img src={hacker} class="card-img-top" alt="..." />
        </div>
      </div>
    );
  }
}

export default Header;
