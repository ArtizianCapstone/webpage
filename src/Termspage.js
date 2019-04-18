import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";

class TermsPage extends Component {
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
              <h1>Terms</h1>
            </div>
            <div align = "left">
              <p>These terms and conditions (Terms) govern your access to and use of the Services (as described below),
                and any information, text, graphics, videos, or other materials appearing on the Services (collectively
                referred to as Content). Your access to and use of the Services is expressly conditioned on your compliance
                with these Terms. Certain features, services or tools of the Services may be subject to additional guidelines,
                terms, or rules, which will be posted with those features and are a part of these Terms. By accessing or
                using the Services, you agree to be bound by these Terms.</p>
            </div>
          </Row>
          <Row>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TermsPage;