import React, { Component } from "react";
import style from "./style.module.scss";

import Button from "../../brandedButton/index";

class ProductHeader extends Component {
  render() {
    return (
      <div className={style.productHeader}>
        <div className={style.discoverWrapper}>
          <div className={style.textContainer}>
            <h1 className={style.title}>
              {" "}
              The easiest way to manage team projects and tasks
            </h1>
            <p className={style.text}>
              Our Process will help you to drive the innovation and creativity
              culture to solve problems
            </p>
            <Button children="Get Started" />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductHeader;
