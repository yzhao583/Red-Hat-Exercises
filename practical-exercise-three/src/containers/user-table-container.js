import React from "react";
import Component from "../override/component";
import { Link } from "react-router-dom";
import ResponsiveTable from "../components/responsive-table";
import { Segment } from "semantic-ui-react";
import Api from "../network/api";

class UserTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      requestData: this.requestData,
      headers: [
        {
          Header: "Name",
          accessor: "name",
          Cell: this.renderNameCell
        },
        {
          Header: "Username",
          accessor: "username"
        },
        {
          Header: "Email",
          accessor: "email"
        },
        {
          Header: "Address",
          accessor: "address"
        }
      ]
    };
  }

  renderNameCell(cellInfo) {
    let userId = cellInfo.original.id;
    let name = cellInfo.original.name;
    const url = "/users/" + userId;

    return <Link to={url}>{name}</Link>;
  }

  requestData() {

    Api.getUsers().then(
      response => {

        this.setState({
          data: response,
          isLoading: false
        });
      },
      error => {
        console.err(error);

        this.setState({
          data: [],
          isLoading: false
        });
      }
    );

  }

  render() {
    const { data, headers, isLoading, requestData } = this.state;

    return (
      <Segment className="fade-in user-table-container">
        <h2>Users</h2>
        <ResponsiveTable
          headers={headers}
          data={data}
          requestData={requestData}
          loading={isLoading}
          sortable={true}
          showPagination={false}
          manual={false}
          defaultSortCol='name'
          defaultSortOrder='desc'
        />
      </Segment>
    );
  }
}

export default UserTableContainer;
