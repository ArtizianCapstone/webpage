import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import Home from "./homescreen.png";
import Art from "./artisanstab.gif";
import Listen from "./listingPage.png";
import Sched from "./scheduleMeeting.png";

class FeaturesPage extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: props.page,
    };
  }

  render() {
    return (
      <div className="FeaturesPage">
        <Container>
          <Row>
              <div className="Title">
                <h1>Features</h1>
              </div>
          </Row>
          <Row>
            <div>
              <Col md={6} sm={6}>
                <h2>See how your week looks</h2>
                <ul>
                  <li>View upcoming meetings</li>
                  <li>Look at value added to the community</li>
                </ul>
              </Col>
              <Col md={6} sm={6}>
                <img  source = {"./homescreen.png"}/>
              </Col>
            </div>
          </Row>
          <Row>
            <Col md={6} sm={6}>
              <img source = {Sched}/>
            </Col>
            <Col md={6} sm={6}>
              <h2>Connect quickly and painlessly with artisans</h2>
              <ul>
                <li>See a list of your artisans</li>
                <li>View their contact info</li>
                <li>Schedule meetings</li>
                <li>See individual's listings</li>
              </ul>
            </Col>
          </Row>
          <Row>
              <Col md={6} sm={6}>
              <h2>Make banking a breeze</h2>
                <ul>
                  <li>See what you need to pay to artisans</li>
                  <li>Group by time or person</li>
                </ul>
            </Col>
            <Col md={6} sm={6}>
              <img source={Art}/>
            </Col>
          <Row>
            <Col md={6} sm={6}>
              <img source={Listen}/>
            </Col>
            <Col md={6} sm={6}>
              <h2>Mange your listings live!</h2>
              <ul>
                <li>Edit inventory</li>
                <li>Change product descriptions</li>
              </ul>
            </Col>
          </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FeaturesPage;