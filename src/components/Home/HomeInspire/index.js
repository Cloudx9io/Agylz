import React from "react";
import "./inspire.styles.scss";
import Carousel from "../../Home/Homecarousel";
// import image from '../../assets/img_slider.png';

var items = [1, 2, 3];

class Inspire extends React.Component {
  render() {
    return (
      <div className="inspire">
        <div className="first-section">
          <h1>Inspire the Next</h1>
          <p>
            Agylz designed to facilitate the creative thought process, new
            imagination and solving problems to deliver <br />
            better products, services and internal processes.
          </p>
        </div>
        <div className="second-section">
          <h1>How It Works</h1>
          <Carousel items={items} active={0}></Carousel>

          <p>Set the expectations, create your agenda and assemble the team</p>
        </div>
      </div>
    );
  }
}

export default Inspire;
