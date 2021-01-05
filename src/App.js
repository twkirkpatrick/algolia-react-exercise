import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Search from "./components/Search";
import store from "./store";
import Articles from "./components/Articles";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Search />
        <Articles />
      </div>
    </Provider>
  );
};

export default App;
