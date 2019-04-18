import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";

class FeaturesPage extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: props.page,
    };
  }

  render() {
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Title">
              <h1>Features</h1>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FeaturesPage;