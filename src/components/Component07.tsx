import  { Component, createRef } from "react";

interface State {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
  error: string;
}

export default class RegisterForm extends Component<{}, State> {
  nameRef = createRef<HTMLInputElement>();

  state: State = {
    name: "",
    email: "",
    password: "",
    address: "",
    message: "",
    error: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, address } = this.state;


    if (!name || !email || !password) {
      this.setState({ error: "Tên, Email và Mật khẩu không được để trống!", message: "" });
      return;
    }

  
    const users = JSON.parse(localStorage.getItem("users") || "[]");


    if (users.some((u: any) => u.email === email)) {
      this.setState({ error: "Email không được phép trùng!", message: "" });
      return;
    }


    const newUser = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

 
    this.setState({
      name: "",
      email: "",
      password: "",
      address: "",
      message: "Đăng ký tài khoản thành công!",
      error: "",
    });

  
    this.nameRef.current?.focus();
  };

  render() {
    const { name, email, password, address, message, error } = this.state;
    return (
      <div style={{ padding: 24 }}>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Tên sinh viên</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              ref={this.nameRef}
            />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </div>
          <div>
            <label>Mật khẩu</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div>
            <label>Địa chỉ</label>
            <input type="text" name="address" value={address} onChange={this.handleChange} />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
      </div>
    );
  }
}
