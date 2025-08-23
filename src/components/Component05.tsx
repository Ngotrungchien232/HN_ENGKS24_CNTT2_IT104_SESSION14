import React, { Component } from "react";

export default class ProductForm extends Component {
  state = {
    productCode: "",
    productName: "",
    price: "",
    quantity: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { productCode, productName, price, quantity } = this.state;
    return (
      <div style={{ padding: 24 }}>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={productCode}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
