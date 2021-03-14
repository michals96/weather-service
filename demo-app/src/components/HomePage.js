import React, { Component } from "react";
import WeatherItems from "./WeatherItems";
import "../style/weatherList.css";
import Counter from "./Counter";

class homepage extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      items: []
    };
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="counterListContainer">
        <div className="counter">
          <Counter />
        </div>

        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input
                ref={(a) => (this._inputElement = a)}
                placeholder="Enter city name"
              ></input>
              <button type="submit">add</button>
            </form>
          </div>
          <WeatherItems entries={this.state.items} delete={this.deleteItem} />
        </div>
      </div>
    );
  }
}
export default homepage;
