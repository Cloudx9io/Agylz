import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import logo from "../../assets/ic_logo.png";
import "./layout.styles.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2 className="logotext">AGYLZ </h2>
        </div>
        <Menu className="Menu" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/product">Product</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/pricing">Pricing</Link>{" "}
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
          <div className="space"></div>
          <Menu.Item key="5">Login</Menu.Item>
          <Menu.Item key="6">
            {" "}
            <span className="register">Register</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
