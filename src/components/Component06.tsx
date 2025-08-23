import { Component } from "react";


export default class GenderForm extends Component {
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const gender = (form.gender as RadioNodeList).value;

    console.log("Giới tính được chọn:", gender);
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h2>Chọn giới tính</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input type="radio" name="gender" value="Nam" /> Nam
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="Nữ" /> Nữ
            </label>
          </div>
          <div>
            <label>
              <input type="radio" name="gender" value="Khác" /> Khác
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
