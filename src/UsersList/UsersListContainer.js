import React, { Component } from "react";
import UsersList from "./UsersList";
import { graphql } from "react-apollo/index";
import gql from "graphql-tag";

const USERS_QUERY = gql`
  {
    users {
      name
      img
      type
      owner
      address
    }
  }
`;

class UsersListContainer extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    if (data.users) {
      this.setState({ usersList: data.users });
    }
  }

  render() {
    const { usersList } = this.state;
    return <UsersList usersList={usersList} />;
  }
}

export default graphql(USERS_QUERY)(UsersListContainer);
