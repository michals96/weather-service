import axios from 'axios';
import {showLoader, hideLoader} from "../actions/loaderActions";

export function setToken(){
  axios.interceptors.request.use(
    function(config) {
        config.headers["authorization"] = "Bearer " + localStorage.getItem("authorization");
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}

axios.interceptors.request.use(function (config) {
  showLoader();
  return config;
});
 
axios.interceptors.response.use(function (response) {
  hideLoader();
  return response;
});