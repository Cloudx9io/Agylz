import React from 'react';
import { Layout, Menu,Row, Col} from 'antd';
import { Link} from 'react-router-dom'
import logo from '../../assets/ic_logo.png';
import footerlogo from'../../assets/img_footer_logo.png';
import face from '../../assets/ic_facebook.png';
import twitter from '../../assets/ic_twitter.png';
import instagram from '../../assets/ic_instagram.png';
import app from '../../assets/img_app_store.png';
import play from '../../assets/img_google_play.png';
import './layout.styles.scss';



const { Header, Content, Footer } = Layout;


const Page =({children})=> (


    <Layout className="layout">
    <Header className="header">
        <div className="logo">
        <img src={logo} alt="logo"/>  
        <h2 className="logotext">AGYLZ </h2>
        </div>
    <Menu className="Menu"  mode="horizontal"
        >
    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
    <Menu.Item key="2"><Link to="/product">Product</Link></Menu.Item>
    <Menu.Item key="3"><Link to="/pricing">Pricing</Link> </Menu.Item>
    <Menu.Item key="4"><Link to="/contact">Contact</Link></Menu.Item>
    <div className="space"></div>
    <Menu.Item key="5">Login</Menu.Item>
    <Menu.Item key="6"> <span  className="register">Register</span>
    </Menu.Item>
    
    </Menu>
   
  
     
  </Header>
  <Content style={{width: "100%"}}>
      {children}
  </Content>


    <Footer className="footer" >
      <Row type="flex" justify="center">
        <Col span={3}   > <img src={footerlogo} alt="Agylz"/> </Col>
        <Col span={3} offset={3} > 
        <ul>
            <li className="menu-title">Dcolabs</li>
            <li> Home</li>
            <li>About</li>
            <li>Register</li>
            <li>Login</li>
        </ul>
        
        </Col>
        <Col span={3} >
        <ul>
            <li className="menu-title">Dcolabs</li>
            <li>Decolabs</li>
            <li>Press</li>
            <li>FAQs</li>
            <li>Link 4</li>
        </ul>
         </Col>
        <Col span={3} >
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
            <Col span={3}><a href="#"><img src={face} alt=""/></a></Col>
            <Col span={3}><a href="#"><img src={twitter} alt=""/></a></Col>
            <Col span={3}><a href="#"><img src={instagram} alt=""/></a></Col>
          </Row>
          <p className="down">DOWNLOAD IT NOW</p>
          <Row type="flex" justify="center">
            <Col span={12}><img src={app} alt="appstore"/></Col>
            <Col span={12}><img src={play} alt="googleplay"/></Col>
          </Row>
         
         </Col>
      </Row>
      <Row  type="flex" justify="center">
        <Col span={5}> <p className="copy">Copyright © All Rights Reserved 2019 | <br/> 
Dcolabs.com </p></Col>
      </Row>
    </Footer>
  </Layout>

    );





export default Page;