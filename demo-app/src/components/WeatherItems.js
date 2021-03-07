import React, { Component } from "react";

class WeatherItems extends Component{

    constructor(props){
        super(props);

        this.createWeatherItems = this.createWeatherItems.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    createWeatherItems(item){
        return (
            <li onClick={() => this.delete(item.key)} key={item.key}>
              {item.text}
            </li>
          );
    }

    render(){
        var weatherEntries = this.props.entries;
        var listWeatherItems = weatherEntries.map(this.createWeatherItems);

        return(
            <ul className="theList">
                {listWeatherItems}
            </ul>
        )
    }
}

export default WeatherItems;