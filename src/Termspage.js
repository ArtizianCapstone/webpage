import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import orange from "./orange.gif";
import mic_drop from "./mic_drop.gif";

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
              <p>Amazon Handmade is a store with handcrafted products, made by Artisans.
                Amazon uses an application process to add new Artisans to the Handmade category to ensure customers are
                able to buy with confidence. This companion app is only available in regions that support Amazon Handmade.
                 If it is not yet available in your region we recommend you use Amazon Handmade's contact page to request they expand
                the service to your region. This app is downloadable by anyone, but you need to be an approved Amazon seller to
                log in and use this product. To become an Amazon seller check out the Handmade tab above.</p>
              <p>All users of the app must follow Amazon Handmade's terms and services (<a href={"https://sellercentral.amazon.com/gp/help/external/G201817290?ref=alm_hnd_09_a&ld=ASUKHNDDirect"}>see here</a>) in addition to our own.
                These terms and conditions (Terms) govern your access to and use of the Services,
                and any information, text, graphics, videos, or other materials appearing on the Services (collectively
                referred to as Content). Your access to and use of the Services is expressly conditioned on your compliance
                with these Terms. Certain features, services or tools of the Services may be subject to additional guidelines,
                terms, or rules, which will be posted with those features and are a part of these Terms. By accessing or
                using the Services, you agree to be bound by these Terms.</p>
              <p>
                This app can only be downloaded from Github and the official Apple app store. We reserve the the right to stop
                maintaining this app at anytime. This app uses a Sleepycat License.
              </p>
            </div>
          </Row>
          <Row>
              <div align="left">
                That means you can:
                <ul>
                  <li>Link this app</li>
                  <li>Distribute it with restrictions</li>
                  <li>Modify this app</li>
                  <li>Use this app for personal use</li>
                </ul>
             But you cannot:
              <ul>
                <li>Patent this app</li>
                <li>License this product</li>
              </ul>
              </div>
          </Row>
          <Row>
            <img
              className="d-block w-100 h-50"
              src={mic_drop}
              alt="Third slide"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default TermsPage;