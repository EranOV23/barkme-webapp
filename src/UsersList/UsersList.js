import React, { Component } from "react";
import { Avatar, Icon, Table } from "antd";

class UsersList extends Component {
  render() {
    const { usersList } = this.props;
    const dataSource = usersList;
    const columns = [
      {
        title: "Avatar",
        dataIndex: "img",
        render: (text, record) => <Avatar src={record.img} alt="" />
      },
      {
        title: "Name",
        dataIndex: "name"
      },

      {
        title: "Owner",
        dataIndex: "owner"
      },
      {
        title: "Type",
        dataIndex: "type"
      },
      {
        title: "Address",
        dataIndex: "address"
      }
    ];

    return (
      <div>
        <Table dataSource={dataSource} columns={columns} rowKey="id" />;
      </div>
    );
  }
}

export default UsersList;
