import axios from 'axios';

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