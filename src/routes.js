import React from "react";
import { Route } from "react-router-dom";
import Feed from "./Feed";
import Users from "./UsersList";
import Nav from "./components/Nav";

function Routes(props) {
  return (
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Feed} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default Routes;
