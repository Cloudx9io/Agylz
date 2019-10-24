import React from "react";
import "./product.styles.scss";
import Page from "../../components/layout";
import ProductHeader from "../../components/Product/ProductHeader";
import ProductInspire from "../../components/Product/productInspire";
import ProductLifeCycle from "../../components/Product/ProductLifeCycle";
import ProductDetails from "../../components/Product/ProductDetails";

class Product extends React.Component {
  render() {
    return (
      <Page>
        <ProductHeader />
        <ProductInspire />
        <ProductLifeCycle />
        <ProductDetails />
      </Page>
    );
  }
}
export default Product;
