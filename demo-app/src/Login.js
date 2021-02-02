import React, { Component } from "react";
import axios from "axios";

class login extends Component {
  constructor() {
    super();

    this.state = {
      username: "admin",
      password: "admin"
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

      /*console.log(res);
      console.log(res.headers);
      console.log(res.data.token);*/

      axios.interceptors.request.use(
        function(config) {
            config.headers["authorization"] = "Bearer " + res.data.token;
          return config;
        },
        function(err) {
          return Promise.reject(err);
        }
      );

      return this.handleDashboard();
    });
  };

  handleDashboard() {
    axios.get("http://10.0.2.2:8080/weather/London").then(res => {
        this.props.history.push("/weather/London");
    });
  }

  render() {
    return (
      <div>
        <div class="wrapper">
          <form class="form-signin" onSubmit={this.handleFormSubmit}>
            <h2 class="form-signin-heading">Please login</h2>
            <div className="form-group">
              <input type="text"
                class="form-control"
                placeholder="User name"
                value="admin"
              />
            </div>
            <div className="form-group">
              <input type="password"
                class="form-control"
                placeholder="password"
                value="admin"
              />
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default login;