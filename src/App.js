import React, { Component } from "react";
import Header from "./components/Header";
import UsersList from "./UsersList";
import FeedContainer from "./Feed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UsersList />
        <FeedContainer />
      </div>
    );
  }
}

export default App;
