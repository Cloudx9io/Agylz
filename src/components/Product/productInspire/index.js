import React from "react";
import "./inspireProduct.styles.scss";
import product from "../../../Images/img_product.png";

class ProductInspire extends React.Component {
  render() {
    return (
      <div className="inspireHeader">
        <div className="discoverWrapper">
          <h1>Inspire the Next</h1>
          <p>
            Agylz designed to facilitate the creative thought process, new
            imagination and solving problems to deliver <br />
            better products, services and internal processes.
          </p>
          <img src={product} />
        </div>
      </div>
    );
  }
}

export default ProductInspire;
