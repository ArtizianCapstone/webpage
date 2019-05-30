import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import balance from "./rufusgif.gif";
import corg from "./corgi_keypad.gif";
import largecorg from "./fullkeyboard.gif";
import rufus from "./rufus_balance.gif";
import box from "./dogbox.gif"
class PrivacyPage extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: props.page,
    };
  }

  render() {
    const RUFUS = <img source={balance}/>;
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Title">
              <h1>Privacy Policy</h1>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>Introduction</h2>
              <br/><p>This policy describes the information we process to
                support the Amazon Handmade mobile app. You can find additional information on our
                Terms page and on <a href = "https://www.amazon.com/gp/help/customer/display.html?nodeId=468496">
                  Amazon's privacy page
                </a>. </p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>Why do we collect your data</h2>
              <p>To provide the Handmade app, we must process information about you and your artisans. We collect your data primarily to setup profiles for you and your artisans.
              Customers buying products in the Amazon Handmade marketplace also use the data you share to make purchasing decisions</p>
            </div>
          </Row>
          <Row>
              <div align="left">
                <br/><h2>What types of data do we collect</h2>
                <br/>
                <Container>
                  <Row>
                    <Col md={4} sm={4}>
                      <h5>We collect from NGO organizers:</h5>
                      <ul>
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>Your phone number</li>
                        <li>Your location when the app is open</li>
                        <li>The amount of time you have the app open</li>
                        <li>The ways you interact with the app</li>
                        <li>Your organization's name</li>
                        <li>Your organization's address</li>
                        <li>Your organization's summary</li>
                      </ul>
                    </Col>
                    <Col md={4} sm={4}>
                      <h5>We collect from Artisans:</h5>
                      <ul>
                        <li>Their name</li>
                        <li>Their email address</li>
                        <li>Their phone number</li>
                        <li>Their picture</li>
                        <li>Pictures and videos of their products</li>
                        <li>Descriptions of their products</li>
                        <li>A profile picture of the artisan</li>
                        <li>A biography of the artisan</li>
                        <li>Data relating to the artisan's sales</li>
                      </ul>
                    </Col>
                    <Col md={4} sm={4}>
                      <img
                        className="inner"
                        src={box}
                        alt="Third slide"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How do we use your information</h2>
              <br/><p>We use your information to provide customized serives to better fit your organization's needs.</p>
            </div>
          </Row>
          <Row>
            <Col md={7} sm={7}>
              <div>
                <img
                  className="inner"
                  src={largecorg}
                  alt="Third slide"
                />
              </div>
            </Col>
            <Col md={5} sm = {5}>
              <div>
                <div align="left">
                  <h2>How is your information shared</h2>
                  <br/><p>Artisan contact information is shared with the NGO their account is linked to.</p>
                </div>
                <div align="left">
                  <h3>First Party</h3>
                  <br/><p>As stated previously, your data will be visible to Amazon Handmade, and the students of Cal Poly's CSC 406
                class which are building this app. Artisan bios and photos will also be visible in the Amazon Handmade maerketplace
                for customers to view and make informed purchasing decisions.</p>
                </div>
                <div align="left">
                  <h3>Third Party</h3>
                  <br/><p>Amazon reserves the right to share any data collected with 3rd parties that meet their business interests.</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div align="left">
              <h2>How can you manage your information</h2>
              <br/><p>You can manage your information in the app</p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How do you delete your information</h2>
              <br/><p>Artisans can have their information deleted by asking their affiliated NGO to delete them from the app.
            NGOs can delete themselves by contacting Amazon Handmade customer support. If an NGO is deleted, all the artisian information
            tied to that account is also deleted.</p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How will we notify you of changes to this policy</h2>
              <br/><p>We are a team of students not getting paid to maintain this, so honestly check the website for updates.
              In all honesty the answer should be you and your artisians will receive a text notification the policy was updated and you
              should check again</p>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PrivacyPage;