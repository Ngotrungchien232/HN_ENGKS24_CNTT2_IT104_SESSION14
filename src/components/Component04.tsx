import  { Component } from "react";



export default class SloganStateDemo extends Component {
  state = {
    slogan: "Học code để đi làm",
  };

  componentDidMount() {
    console.log("Component đã được mount!");
  }

  handleChange = () => {
    this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
  };

  render() {
    const { slogan } = this.state;
    return (
      <div style={{ padding: 24 }}>

        <h1>Slogan: "{slogan}"</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
