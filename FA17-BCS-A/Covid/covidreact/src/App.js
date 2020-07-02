import React from "react";
import AddRecipie from "./components/AddRecipie";
import ListRecord from "./components/ListRecords";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <hr />
        <Switch>
          <Route path="/add">
            <AddRecipie />
          </Route>
          <Route path="/">
            <ListRecord />
          </Route>
        </Switch>
        <hr />
        This is my footer
      </div>
    </Router>
  );
}

export default App;
