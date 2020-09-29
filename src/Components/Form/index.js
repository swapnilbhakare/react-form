import React, { Component } from "react";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPhone: "",
      userGender: "",
      userPassword: "",
    };
  }

  onNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  onEmailChange = (event) => {
    this.setState({
      userEmail: event.target.value,
    });
  };
  onNumberChange = (event) => {
    this.setState({
      userPhone: event.target.value,
    });
  };
  onGenderChange = (event) => {
    this.setState({
      userGender: event.target.value,
    });
  };
  onPasswordChange = (event) => {
    this.setState({
      userPassword: event.target.value,
    });
  };

  onSubmit = () => {
    if (this.state.userPhone === "" || this.state.userPhone.length !== 10) {
      window.alert("Invalid Phone number");
      return;
    }
    window.alert(`
        Name: ${this.state.userName},
        Email: ${this.state.userEmail},
        Phone: ${this.state.userPhone},
        Gender: ${this.state.userGender},
        Password: ${this.state.userPassword},
        
    `);
  };
  clearFormField = () => {
    this.setState({
      userName: "",
      userEmail: "",
      userPhone: "",
      userGender: "",
      userPhone: "",
    });
  };

  render = () => {
    return (
      <div className="form-container">
        <p className="title">*****User Form</p>
        <input
          onChange={this.onNameChange}
          value={this.state.userName}
          className="input-style"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          onChange={this.onEmailChange}
          value={this.state.userEmail}
          className="input-style"
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          onChange={this.onNumberChange}
          value={this.state.userPhone}
          className="input-style"
          type="text"
          placeholder="Enter Your Number"
        />
        <select
          onChange={this.onGenderChange}
          value={this.state.userGender}
          className="input-style"
        >
          <option>select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input
          onChange={this.onPasswordChange}
          value={this.state.userPassword}
          className="input-style"
          type="text"
          placeholder="Enter Your Password"
        />
        <button onClick={this.onSubmit} className="btn">
          Submit
        </button>
      </div>
    );
  };
}
export default Form;
