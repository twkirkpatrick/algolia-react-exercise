import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Search from "./components/Search";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <Search />
        </div>
      </Provider>
    );
  }
}

export default App;
