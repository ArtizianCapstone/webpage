import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col, Button } from "react-bootstrap";
import teal from './tealgradient.jpeg'
import LandingSlider from "./LandingSlider";
import Slider from "react-slick/lib";
import a1 from './artisan1.jpeg';
import a2 from './artisan2.jpeg'
import a3 from './artisan3.jpeg'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: props.page,
    };
  }
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://services.amazon.com/handmade/handmade.html');
  }

  render() {
    const divStyle = {
      align: 'centered',
      backgroundImage: teal,
    };
    let sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
    };
    const pictures = [a1, a2, a3];
    return (
      <div className="LandingPage">
        <div className="divforc1" style={{backgroundImage:teal}}>
          <Container style={{backgroundImage:teal}}>
            <Row style={{backgroundImage:teal}}>
              <Col md={12} sm={12}>
                <div className="LandingHeader" style={{backgroundImage:teal}}>
                  <h1>Empower your community.</h1>
                  <h3>Think your local artisians are creating great goods? We think so too. <br/>Reach millions of customers with Amazon
                  Handmade today.</h3>
                  <Button onClick={this.handleClick.bind(this)} align="centered">Let's Get Started</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12}>
                <div>

                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default LandingPage;