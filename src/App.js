import React, { Component } from 'react';
import logo from './logo.svg';
import Page from './Page'
import './App.css';
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";


var Terms = {
  title: "Terms",
};
var AboutUS = {
  title: "About Us",
};
var Privacy = {
  title: "Privacy Policy",
};
var Landing = {
  title: "Artizain - Handmade",
};
var Handmade = {
  title: "Amazon",
};
const TABS = [Landing, AboutUS,Terms, Privacy, Handmade];

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Nav
          variant="tabs"
          defaultActiveKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >
          {TABS.map((page, index) => (
            <Nav.Item>
              <Nav.Link key={index} eventKey={index}>{page.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Page page={TABS[activePlace]}/>
      </div>
    );
  }
}

export default App;
