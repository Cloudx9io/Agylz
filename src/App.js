import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './pages/homepage/homepage.component';
import Product from './pages/productpage/product.component';
import Pricing from './pages/pricingpage/pricing.component';
import Contact from './pages/contactpage/contact.component';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product' component={Product}/>
        <Route path ='/pricing'component={Pricing}/>
        <Route path='/contact' component={Contact}/>
      </Switch>  
      </Router>
    </div>
  );
}

export default App;
