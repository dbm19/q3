import React from "react";
import "./App.css";
import data from "./fixed-FHIR-message.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: data
    };
  }
  render() {
    return (
      <div id="App">
        <h1>
          Name of patient: {this.state.patient.identifier[0].name[0].given}{" "}
          {this.state.patient.identifier[0].name[0].family}
        </h1>
        <h1>
          Organization name:{" "}
          {this.state.patient.identifier[0].managingOrganization.display}{" "}
        </h1>
        <h1>Gender: {this.state.patient.identifier[0].gender} </h1>
        <h1>
          Number of conditions they have:{" "}
          {this.state.patient.identifier[0].conditions.length}
        </h1>
        <h1>List of all conditions: </h1>
        <ul>
          {this.state.patient.identifier[0].conditions.map(function(condition) {
            return <li>{condition}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
