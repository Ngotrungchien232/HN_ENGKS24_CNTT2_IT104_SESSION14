import React, { Component } from "react";

export default class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "ngo trung chien" 
    };
    alert("khởi tạo");
  }

  // giai đoạn 2
  componentDidMount() {
    alert("đã được gắn vào DOM");
  }

  render() {
    alert("tạo giao diện theo userName");
    return (
      <div>
        <p>Xin chào, tôi là {this.state.userName}</p>
      </div>
    );
  }
}
