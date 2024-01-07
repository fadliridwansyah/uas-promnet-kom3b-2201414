import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      date: "",
      description: "",
      amount: "",
      status: "",
      receiver: "",
      jk: "",
      no_telp: "",
      address: "",
    };

    // Bind the methods
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.changeReceiver = this.changeReceiver.bind(this);
    this.changeJenisKelamin = this.changeJenisKelamin.bind(this);
    this.changeNoTelp = this.changeNoTelp.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          date: user.date,
          description: user.description,
          amount: user.amount,
          status: user.status,
          receiver: user.receiver,
          jk: user.jk,
          no_telp: user.no_telp,
          address: user.address,
        });
      });
    }
  }

  saveOrUpdateUser = (e) => {
    e.preventDefault();

    // Validate that all fields are filled in
    const requiredFields = [
      "date",
      "description",
      "amount",
      "status",
      "receiver",
      "jk",
      "no_telp",
      "address",
    ];

    for (const field of requiredFields) {
      if (!this.state[field]) {
        alert(`Please fill in the ${field} field.`);
        return; // Prevent form submission if any field is empty
      }
    }

    let user = {
      date: this.state.date,
      description: this.state.description,
      amount: this.state.amount,
      status: this.state.status,
      receiver: this.state.receiver,
      jk: this.state.jk,
      no_telp: this.state.no_telp,
      address: this.state.address,
    };

    if (this.state.id === "_add") {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/users");
        alert("Data added successfully!");
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
        alert("Data updated successfully!");
      });
    }
  };

  changeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  changeAmount = (event) => {
    this.setState({ amount: event.target.value });
  };

  changeStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  changeReceiver = (event) => {
    this.setState({ receiver: event.target.value });
  };

  changeJenisKelamin = (event) => {
    this.setState({ jk: event.target.value });
  };

  changeNoTelp = (event) => {
    this.setState({ no_telp: event.target.value });
  };

  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    return this.state.id === "_add" ? (
      <h3 className="text-center" style={{ color: "#001F3F" }}>
        Add Transaksi
      </h3>
    ) : (
      <h3 className="text-center" style={{ color: "#001F3F" }}>
        Update Transaksi
      </h3>
    );
  }

  render() {
    const formStyle = {
      backgroundColor: "#90A4AE", // Warna latar belakang form
      padding: "20px",
      borderRadius: "10px",
    };

    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={formStyle}
            >
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      placeholder="Date"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={(e) => this.setState({ date: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <input
                      placeholder="Description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label>Amount</label>
                    <input
                      placeholder="Amount"
                      name="amount"
                      className="form-control"
                      value={this.state.amount}
                      onChange={this.changeAmount}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatus}
                    >
                      <option value="debit">Debit</option>
                      <option value="kredit">Kredit</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Receiver</label>
                    <input
                      placeholder="Receiver"
                      name="receiver"
                      className="form-control"
                      value={this.state.receiver}
                      onChange={this.changeReceiver}
                    />
                  </div>
                  <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <select
                      name="jk"
                      className="form-control"
                      value={this.state.jk}
                      onChange={this.changeJenisKelamin}
                    >
                      <option value="L">Laki-Laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>No Telepon</label>
                    <input
                      placeholder="No Telepon"
                      name="no_telp"
                      className="form-control"
                      value={this.state.no_telp}
                      onChange={this.changeNoTelp}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddress}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateUser}
                    style={{ marginBottom: "50px" }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px", marginBottom: "50px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUserComponent;
