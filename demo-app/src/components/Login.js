import React, { Component } from "react";
import axios from "axios";
import { setToken } from "./Interceptors";
import logo from "../weather.png"
class login extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      password: null
    };
  }

  handleChange= ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const endpoint = "http://10.0.2.2:8080/login";

    const username = this.state.username;
    const password = this.state.password;

    const user_object = {
      username: username,
      password: password
    };

    axios.post(endpoint, user_object).then(res => {
      localStorage.setItem("authorization", res.data.token);
      setToken();
      return this.handleDashboard();
    });
  };
  
  handleDashboard() {
    const promise = axios.get("http://10.0.2.2:8080/weather/London");
    
    promise.then(res => {
        this.props.history.push("/homepage");
    });
  }

  render() {
    return (
      <div>
       <div class="custom-img">
       <img src={logo} alt={"logo"}/>
       </div>
        <div class="wrapper">
          <form class="form-signin">
            <h2 class="form-signin-heading">Please login</h2>
            <div className="form-group">
              <input type="text"
                name="username"
                class="form-control"
                placeholder="Login"
                value={ this.state.username }
                onChange={ this.handleChange }
              />
            </div>
            <div className="form-group">
              <input type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                value={ this.state.password }
                onChange={ this.handleChange }
              />
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={ this.handleFormSubmit }>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default login;