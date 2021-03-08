import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    title: "Counter",
    counter: 0
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-item">
              <button className="button" onClick={this.incrementCounter}>
                <span className="icon">
                  <i className="fa fa-plus" />
                </span>
              </button>
            </div>
            <div className="level-item">
              <h2>{this.state.counter}</h2>
            </div>
            <div className="level-item">
              <button className="button" onClick={this.decrementCounter}>
                <span className="icon">
                  <i className="fa fa-minus" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}