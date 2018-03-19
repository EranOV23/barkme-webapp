import React from "react";
import { Route } from "react-router-dom";
import Feed from "./Feed";
import Users from "./UsersList";
import Header from "./components/Header";

function Routes(props) {
  return (
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Feed} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default Routes;
