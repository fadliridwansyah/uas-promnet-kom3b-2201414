import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div
          className="card col-md-8 offset-md-2"
          style={{ backgroundColor: "#001F3F", color: "white" }}
        >
          <h3
            className="card-header text-center"
            style={{ backgroundColor: "#001F3F", color: "white" }}
          >
            View Transaction Details
          </h3>
          <div className="card-body">
            <table className="table" style={{ color: "white" }}>
              <tbody>
                <tr>
                  <td>
                    <strong>ID</strong>
                  </td>
                  <td>{this.state.user.id}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Transaction Date</strong>
                  </td>
                  <td>{this.state.user.date}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Description</strong>
                  </td>
                  <td>{this.state.user.description}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Amount</strong>
                  </td>
                  <td>{this.state.user.amount}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Status</strong>
                  </td>
                  <td>{this.state.user.status}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Receiver</strong>
                  </td>
                  <td>{this.state.user.receiver}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Gender</strong>
                  </td>
                  <td>{this.state.user.jk}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone Number</strong>
                  </td>
                  <td>{this.state.user.no_telp}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address</strong>
                  </td>
                  <td>{this.state.user.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUserComponent;
