import{ Component } from "react";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      alert("Email và mật khẩu không được để trống");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");


    const found = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (found) {
      alert("Đăng nhập thành công");
    } else {
      alert("Đăng nhập thất bại");
    }
  };

  render() {
    return (
      <div>
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Mật khẩu: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    );
  }
}
