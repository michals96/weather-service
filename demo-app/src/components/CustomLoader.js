import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const CustomLoader = props => {
 const style = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style={style}>
      <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
    </div>
  );
};

export default CustomLoader;