import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import login from "./components/Login";
import dashboard from "./components/Dashboard";
import homepage from "./components/HomePage";
import forecast from "./components/Forecast";
import PrivateRoute from "./components/restricted-routes/PrivateRoute";
import PublicRoute from "./components/restricted-routes/PublicRoute";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <PublicRoute restricted={true} exact path="/" component={login}/>
          <PrivateRoute exact path="/dashboard" component={dashboard}/>
          <PrivateRoute exact path="/homepage" component={homepage}/>
          <PrivateRoute exact path="/forecast" component={forecast}/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
