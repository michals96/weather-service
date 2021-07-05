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

  renderForecast() {
    window.location.href ="/forecast";
  }

  renderWeather() {
    window.location.href ="/homepage";
  }
 
  render() {
    return (
      <Navbar
        logo={logo}
        menuItems={[
          {
            title: "Weather",
            isAuth: true,
            onClick: () => {
              this.renderWeather()
            },
          },
          {
            title: "Forecast",
            isAuth: true,
            onClick: () => {
              this.renderForecast()
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