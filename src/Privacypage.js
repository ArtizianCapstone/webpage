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
              <p>We collect your data primarily to setup profiles for you and your artisans.
              Customers buying products in the Amazon Handmade marketplace also use the data you share to make purchasing decisions</p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <br/><h2>What types of data do we collect</h2>
              <p>We collect from NGO organizers:</p>
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
              <p>We collect from Artisans:</p>
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
            </div>
            <div align="left">
              <p> To provide the Handmade app, we must process information about you and your artisans.</p>
            </div>
          </Row>
          <Row>
            <div align="left">
              <h2>How do we use your information</h2>
              <br/><p>We use your information to prov</p>
            </div>
          </Row>
          <Row>
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