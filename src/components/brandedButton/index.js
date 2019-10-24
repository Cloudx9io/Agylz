import React, { Component } from "react";
import { Button } from "antd";
import "./button.styles.scss";

class BrandedButton extends React.Component {
  render() {
    const {
      children,
      styles,
      redirect,
      handleClick,
      handelClick,
      disabled
    } = this.props;
    return (
      <Button
        disabled={disabled}
        className="button"
        style={styles}
        href={redirect}
        onClick={handelClick || handleClick}
      >
        {children}
      </Button>
    );
  }
}

export default BrandedButton;
