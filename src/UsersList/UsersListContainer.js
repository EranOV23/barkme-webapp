import React, { Component } from "react";
import UsersList from "./UsersList";
import users from "../data/users";

class UsersListContainer extends Component {
  state = {};

  componentDidMount() {
    this.setState({ usersList: users });
  }

  render() {
    const { usersList } = this.state;
    return <UsersList usersList={usersList} />;
  }
}

export default UsersListContainer;
