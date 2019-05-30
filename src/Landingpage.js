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
import Carousel from 'react-bootstrap/Carousel'
import p2 from "./bowls.jpg";
import p3 from "./flowersoappink.jpg";
import p4 from "./greenwal.jpg";
import p5 from "./initalwallet.jpg";
import p6 from "./lightwal.jpg";
import p8 from "./redwal.jpg";
import p9 from "./soapyellow.jpg";
import p10 from "./stool.jpeg";
import rufus from "./rufus_balance.gif";
import "./custom.css";
import celebrate from "./celebrate.gif";

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
                  <Carousel indicators={false}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src= {p3}
                        alt="First slide"
                      />
                      <Carousel.Caption>

                        <h1>Empower your community.</h1>
                        <h3>Think your local artisans are creating great goods? We think so too. <br/>Reach millions of customers with Amazon
                          Handmade today.</h3>
                        <br/>
                        <Button onClick={this.handleClick.bind(this)} align="centered">Let's Get Started</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={p2}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h1>Empower your community.</h1>
                        <h3>Think your local artisans are creating great goods? We think so too. <br/>Reach millions of customers with Amazon
                          Handmade today.</h3>
                        <br/>
                        <Button onClick={this.handleClick.bind(this)} align="centered">Let's Get Started</Button>

                      </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src= {p9}
                        alt="First slide"
                      />
                      <Carousel.Caption>

                        <h1>Empower your community.</h1>
                        <h3>Think your local artisans are creating great goods? We think so too. <br/>Reach millions of customers with Amazon
                          Handmade today.</h3>
                        <br/>

                        <Button onClick={this.handleClick.bind(this)} align="centered">Let's Get Started</Button>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                <br/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6}>
                <div align={"left"} className = "inner">
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h5>
                  Built to nurture local artisan communities, the Amazon Community Helper provides a complete toolset
                  for NGOs to better engage with local artisans and to them expand their market reach globally.
                  This application enables NGO community leaders to flawlessly transition between the multiple roles they serve
                  to support their artisans. From banking, to scheduling, managing inventory and sipping, the Amazon
                  Community Helper app serves as a your go-to place to make sure all your artisans' needs are met.
                  </h5>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <br/>
                <div align={"right"}>
                <img
                  className="inner"
                  src={rufus}
                  alt="Third slide"
                />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6}>
                <br/>
                <img
                  className="inner"
                  src={celebrate}
                  alt="Third slide"
                />
              </Col>
              <Col md={6} sm={6}>
                <br/>
                <br/>
                <div align={"left"}>
                  <br/>
                  <br/>
                  <h5>
                    We designed our app to complement and enhance the face-to-face interactions you're already having with your artisans.
                    Through our app, concrete examples of how you and your artisans are expanding your community's economy
                    The best part is, your artisans don't need a smart phone to use the system! Want more information? Checkout: <br/>
                  <a href="https://services.amazon.com/handmade/handmade.html" target="_blank">https://services.amazon.com/handmade/handmade.html</a>
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default LandingPage;