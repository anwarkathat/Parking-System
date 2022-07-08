import React, { Component } from "react";
import "../App.css";

class AddSlots extends Component {
  state = {};

  // onClick = (e) =>{
  //     this.preventDefault();
  //     this.props.AddSlots()
  // }
  render() {
    return (
      <div className="h2">
        <h2>Welcome To Parking Area</h2>
        <button id="Add-slot">Add Slots</button>
      </div>
    );
  }
}

export default AddSlots;