import React, { Component } from "react";
 
import Navbar from "reactjs-navbar";
import logo from "../weather.png"
import "reactjs-navbar/dist/index.css";
 
class NavigationBar extends Component {
  state = {
    isLoading: false,
  };

  handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }
 
  render() {
    return (
      <Navbar
        logo={logo}
        menuItems={[
          {
            title: "Administration",
            isAuth: true,
            onClick: () => {
              alert("Its coffee time...");
            },
          },
          {
            title: "Logout",
            onClick: () => {
              this.handleLogout()
            },
            isAuth: true,
          },
        ]}
      />
    );
  }
}

export default NavigationBar;

// https://www.npmjs.com/package/reactjs-navbar