import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Title">
              <h1>About Us</h1>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUsPage;