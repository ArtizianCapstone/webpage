import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
class PrivacyPage extends Component {
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
              <h1>Privacy Policy</h1>
            </div>
          </Row>
          <Row>
            <div>
              <h2>Introduction</h2>
            </div>
            <div align="left">
              <p>This policy describes the information we process to
                support the Amazon Handmade mobile app. You can find additional information on our
                Terms page and on <a href = "https://www.amazon.com/gp/help/customer/display.html?nodeId=468496">
                  Amazon's privacy page
                </a>. </p>

            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>Why do we collect your data</h2>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>What types of data do we collect</h2>
            </div>
            <div align="left">
              <p> To provide the Handmade app, we must process information about you and your artisans.</p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How do we use your information</h2>
            </div>
          </Row>
          <Row>
            <div>
              <div align="left">
                <h2>How is your information shared</h2>
              </div>
              <div align="left">
                <h3>First Party</h3>
              </div>
              <div align="left">
                <h3>Third Party</h3>
              </div>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How can you manage your information</h2>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How do you delete your information</h2>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How will we notify you of changes to this policy</h2>
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

export default PrivacyPage;