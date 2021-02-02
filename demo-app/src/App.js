import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import interceptors from "../src/Interceptors";
import login from "./Login";
import dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={login} />
          <Route exact path="/dashboard" component={dashboard} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
