import React, { Component } from "react";
import firebase from "../firebase";

class CrLogin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const nam = e.target.name,
      val = e.target.value;
    this.setState({
      [nam]: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email,
      pass = this.state.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        alert("logged in successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  render() {
    return (
      <div>
        <h1>Hey! you must login mr. cr!</h1>
        {this.getForm()}
      </div>
    );
  }

  getForm = () => {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="email@example.com"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="btn btn-info">Sign In</button>
        </form>
      </div>
    );
  };
}

export default CrLogin;
