import React from "react";
import AddRecipie from "./components/AddRecipie";
import ListRecord from "./components/ListRecords";

function App() {
  return (
    <div className="container">
      <h1>Hello From COVID Week</h1>
      <hr />
      <ListRecord />
      <AddRecipie />
      <hr />
      This is my footer
    </div>
  );
}

export default App;
