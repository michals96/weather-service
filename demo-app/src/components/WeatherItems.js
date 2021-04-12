import React, { Component } from "react";
import FlipMove from "react-flip-move";

class WeatherItems extends Component {
  constructor(props) {
    super(props);

    this.createWeatherItems = this.createWeatherItems.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createWeatherItems(item) {
    return (
      <li onClick={() => this.delete(item)} key={item}>
        {item}
      </li>
    );
  }

  render() {
    var weatherEntries = this.props.entries;
    var listWeatherItems = weatherEntries.map(this.createWeatherItems);

    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listWeatherItems}
        </FlipMove>
      </ul>
    );
  }
}

export default WeatherItems;

/* TO DO:

* Renderowanie rzeczywistej pogody o którą pytamy backend
* Każdy weather iteam zawiera string + int (pogoda + miasto + temperatura)
* REDUX Thunk lub Sagas lub Epics (Reactive extensions) -> do sprawdzenia
* Walidacja dodawanych pól -> brak duplikatów + unikatowe klucze

*/

