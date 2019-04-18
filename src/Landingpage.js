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
    window.location.assign('https://github.com/ArtizianCapstone/frontend');
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
              <Col md={7} sm={7}>
                <div align={"left"}>
                  <p>
                  Built to nurture local artisan communities, the Amazon Community Helper provides a complete toolset
                  for NGOs to better engage with local artisans and to them expand their market reach globally.
                  This application enables NGO community leaders to flawlessly transition between the multiple roles they serve
                  to support their artisans. From banking, to scheduling, managing inventory and sipping, the Amazon
                  Community Helper app serves as a your go-to place to make sure all your artisans needs are met. We designed
                  our app to complement and enhance the face-to-face interactions you're already having with your artisans.
                  Through our app, concrete examples of how you and your artisians are expacnding you're cmunnities econemy
                  The best part is, your artisans don't need a smart phone to use the system! Want more information? Checkout:
                  </p>
                </div>
              </Col>
              <Col md={5} sm={5}>
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