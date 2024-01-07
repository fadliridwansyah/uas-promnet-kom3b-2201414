import React, { Component } from "react";
import { FaEdit, FaTrashAlt, FaEye, FaPlus } from "react-icons/fa";
import UserService from "../services/UserService";

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      search: "",
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  deleteUser(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (confirmDelete) {
      UserService.deleteUser(id).then((res) => {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id),
        });
      });
    }
    // If user cancels, do nothing
  }

  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  editUser(id) {
    this.props.history.push(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data == null) {
        this.props.history.push("/add-user/_add");
      }
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2
          className="text-center"
          style={{ marginTop: "40px", color: "#001F3F" }}
        >
          List Transaksi Keuangan Dinamik-18
        </h2>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>

        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr style={{ backgroundColor: "#001F3F", color: "white" }}>
                <th>ID</th>
                <th>Tanggal Transaksi</th>
                <th>Deskripsi</th>
                <th>Jumlah Uang</th>
                <th>Status</th>
                <th>Penerima</th>
                <th>Jenis Kelamin</th>
                <th>No Telepon</th>
                <th>Alamat</th>
                <th>Operasi</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.id}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.date}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>
                    {user.description}
                  </td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.amount}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.status}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>
                    {user.receiver}
                  </td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.jk}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.no_telp}</td>
                  <td style={{ backgroundColor: "#90A4AE" }}>{user.address}</td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-info"
                      style={{
                        backgroundColor: "#1976D2",
                        color: "white",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <FaEdit /> Update
                    </button>
                    <button
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-success"
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <FaEye /> View
                    </button>
                    <button
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                      style={{
                        backgroundColor: "#FF5252",
                        color: "white",
                        marginRight: "50px",
                      }}
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button
              className="btn btn-info"
              onClick={this.addUser}
              style={{ backgroundColor: "#1e90ff" }}
            >
              <FaPlus /> Add Transaksi
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
