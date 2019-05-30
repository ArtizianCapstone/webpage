import React, { Component } from 'react';
import logo from './logo.svg';
import Page from './Page'
import './App.css';
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/journal/bootstrap.css";

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
  title: "Home",
};
var Feature = {
  title: "Features",
};
const TABS = [Landing, Feature, Terms, Privacy, AboutUS];

/*{        <Nav
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
          ))}}</Nav>*/

/*
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                  aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            Here
          </button>
 */


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
       <Navbar>
        <Nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light"  defaultActiveKey={activePlace}
             onSelect={index => {
               this.setState({ activePlace: index });
             }}>
          <a className="navbar-brand" href="#">Artizan</a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                {TABS.map((page, index) => (
                  <li>
                    <Nav.Link key={index} eventKey={index}>{page.title}</Nav.Link>
                  </li>
                ))}
              <li>
                <a className="nav-link" href="https://services.amazon.com/handmade/handmade.html" target="_blank">Handmade</a>
              </li>

            </ul>
          </div>
          <button className="download" type="button">
            <a className="download-link" href="https://github.com/ArtizianCapstone/frontend" target="_blank">
            Download
            </a>
          </button>
        </Nav>
       </Navbar>
        <div>
         <Page page={TABS[activePlace]}/>
        </div>
      </div>
    );
  }
}

export default App;
