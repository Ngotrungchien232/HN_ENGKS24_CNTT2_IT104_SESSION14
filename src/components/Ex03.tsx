import  { Component } from "react";


export default class CompanyStateDemo extends Component {
  state = {
    company: "Rikkei Academy",
  };

  componentDidMount() {
    console.log("Component đã được mount!");
  }

  handleChange = () => {
    this.setState({ company: "RikkeiSoft" });
  };

  render() {
    const { company } = this.state;
    return (
      <div style={{ padding: 24 }}>
        <h1>Company: {company}</h1>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
