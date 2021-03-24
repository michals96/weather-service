import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-item">
            <h2>{props.counter}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  counter: state.cities.count,
});

export default connect(mapStateToProps)(Counter);
