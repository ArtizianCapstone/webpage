import Slider from "react-slick";
import React, { Component } from 'react';
import teal from "./tealgradient.jpeg";
import {Button, Col, Container, Row} from "react-bootstrap";
import a1 from './artisan1.jpeg';
import a2 from './artisan2.jpeg'
import a3 from './artisan3.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class LandingSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    };
    const pictures = [a1, a2, a3];
    return (
      <div className="container">

      <Slider {...sliderSettings}>
        <div>
        {pictures.map((photo) =>
          (<div><img src={photo}/></div>))}
        </div>
      </Slider>
      </div>
    );
  }
}

export default LandingSlider;