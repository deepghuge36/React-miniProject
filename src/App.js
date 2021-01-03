import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from './components/auth/Register';
import Login from "./components/auth/Login";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;