import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

export class CustomLoader extends Component {
  constructor(props) {
    super(props);
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
  }

  render(){
    if(this.props.isLoading){
      return (
        <div style={this.style}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.cities.isLoading,
});

export default connect(mapStateToProps)(CustomLoader);