import React, { Component } from "react";
import "./App.css";
import Contacts from "../src/components/Contacts/Contacts";
import Header from "../src/components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
