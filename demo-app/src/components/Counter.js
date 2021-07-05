import React from "react";
import { connect } from "react-redux";
 import { useSelector } from 'react-redux';

export function Counter(props) {
  // let counter;
  // if(1==2){
     const counter = useSelector((state) => state.cities.count);
  // }
  
  // Przepisanie komponentu klasowego na funkcyjny i otestowanie
  // -> przepisanie go na hooki zamiast connect
  // -> otestowanie go z użyciem hookami

  return (
    <section className="section">
      <div className="container">
        <div className="level">
          <div className="level-item">
            <h2>{counter}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;

// const mapStateToProps = (state) => ({
//   counter: state.cities.count,
// });

// export default connect(mapStateToProps)(Counter);
