import React, { Component } from "react";

class WeatherItems extends Component{
    createWeatherItems(item){
        return <li key={item.key}>{item.text}</li>
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