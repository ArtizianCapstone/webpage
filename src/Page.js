import AboutUsPage from './Aboutuspage';
import TermsPage from './Termspage';
import AmazonLinkerPage from './AmazonLinkerpage';
import PrivacyPage from './Privacypage';
import LandingPage from './Landingpage';
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";


class Page extends Component {
  constructor(props) {
    super(props);
    this.props = {
      page: props.page,
    };
  }

  render() {
    let pagetype;
    if (this.props.page.title === "About Us"){
      pagetype = <AboutUsPage/>;}
    if (this.props.page.title === "Terms"){
      pagetype = <TermsPage/>;}
    if (this.props.page.title === "Amazon"){
      pagetype = <AmazonLinkerPage/>;}
    if (this.props.page.title === "Privacy Policy"){
      pagetype = <PrivacyPage/>;}
    if (this.props.page.title === "Artizain - Handmade"){
      pagetype = <LandingPage/>;}
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Pageloaded">
              {pagetype}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page;