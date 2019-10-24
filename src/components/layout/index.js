import React from "react";
import { Layout, Menu, Row, Col } from "antd";
import "./layout.styles.scss";
import Navbar from "./navbar";
import FooterList from "./footer";

const { Header, Content, Footer } = Layout;

const Page = ({ children }) => (
  <Layout className="layout">
    <Header className="header">
      <Navbar />
    </Header>
    <Content style={{ width: "100%" }}>{children}</Content>
    <Footer className="footer">
      <FooterList />
    </Footer>
  </Layout>
);

export default Page;
