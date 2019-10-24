import React, { Component } from "react";
import { Row, Col } from "antd";
import footerlogo from "../../assets/img_footer_logo.png";
import face from "../../assets/ic_facebook.png";
import twitter from "../../assets/ic_twitter.png";
import instagram from "../../assets/ic_instagram.png";
import app from "../../assets/img_app_store.png";
import play from "../../assets/img_google_play.png";
import "./layout.styles.scss";

export default class FooterList extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={3}>
            {" "}
            <img src={footerlogo} alt="Agylz" />{" "}
          </Col>
          <Col span={3} offset={3}>
            <ul>
              <li className="menu-title">Dcolabs</li>
              <li> Home</li>
              <li>About</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </Col>
          <Col span={3}>
            <ul>
              <li className="menu-title">Dcolabs</li>
              <li>Decolabs</li>
              <li>Press</li>
              <li>FAQs</li>
              <li>Link 4</li>
            </ul>
          </Col>
          <Col span={3}>
            <ul>
              <li className="menu-title">Dcolabs</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Link 4</li>
            </ul>
          </Col>
          <Col offset={3} span={5}>
            <p>Follow us on</p>
            <Row type="flex" justify="center">
              <Col span={3}>
                <a href="#">
                  <img src={face} alt="" />
                </a>
              </Col>
              <Col span={3}>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
              </Col>
              <Col span={3}>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
              </Col>
            </Row>
            <p className="down">DOWNLOAD IT NOW</p>
            <Row type="flex" justify="center">
              <Col span={12}>
                <img src={app} alt="appstore" />
              </Col>
              <Col span={12}>
                <img src={play} alt="googleplay" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={5}>
            {" "}
            <p className="copy">
              Copyright © All Rights Reserved 2019 | <br />
              Dcolabs.com{" "}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
