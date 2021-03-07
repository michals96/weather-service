import React, { Component } from "react";
import WeatherItems from "./WeatherItems";

class homepage extends Component {
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);

        this.state = {
            items: []
        };
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref ={(a) => this._inputElement = a}
                placeholder="Enter city name"></input>
            <button type="submit">add</button>
          </form>
        </div>
        <WeatherItems entries={this.state.items}/>
      </div>
    );
  }
}
export default homepage;
