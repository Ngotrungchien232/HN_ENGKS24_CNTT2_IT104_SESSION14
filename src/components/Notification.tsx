import React, { Component } from "react";

export default class Notification extends Component {
 
  render() {
    return (
      <div>
        <p>Rikkei Academy</p>
      </div>
    );
  }

 
  componentDidMount() {
    console.log("Component đã được mount!");
  }
}
