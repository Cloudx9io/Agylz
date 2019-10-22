import React from 'react';
import './carosel.styles.scss';
import img from '../../assets/img_slider.png';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class Carosel extends React.Component{
 
render(){
    return(
  
  <div>
  <div id="carousel">

  <div className="prev">
    <img src={img}/>
  </div>

  <div className="selected">
  <img src={img}/>  </div>

  <div className="next">
  <img src={img}/>  </div>


 <div className="buttons">
  <button id="prev">Prev</button>
  <button id="next">Next</button>
</div>

</div>
</div>

    )
}

}
export default Carosel

