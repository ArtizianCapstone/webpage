import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { GoRocket } from 'react-icons/go'
import { GoPencil } from 'react-icons/go'
import { GoTools } from 'react-icons/go'
import ReactContactForm from 'react-mail-form';
import styled from 'styled-components';
import largecorg from "./fullkeyboard.gif";
import globe from "./globe.jpg"
import orange from "./orange.gif";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://github.com/ArtizianCapstone/frontend');
  }

  render() {
    const Form = styled(ReactContactForm)`
margin:auto;max-width:800px;min-height:100vh;font-size:14px;text-align:center;
input,textarea{display:block;margin:12px auto;width:100%;max-width:720px;border:1px solid #555;outline:0;font-size:16px;}
input{padding:12px 6px;}
textarea{padding:6px;}
a{display:block;margin:auto;width:480px;height:3em;line-height:3em;color:#fff;background-color:#3B9CFF;font-size:16px;font-weight:900;text-decoration:blink;&:visited,&:hover,&:focus,&:active{color:#fff;}&:hover{opacity:.7;}}
`;
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Title">
              <h1>About Us</h1>
            </div>
          </Row>
          <Row>
            <div className="Mission">
              <br/>
              <h2>Our mission is to connect artisans in developing countries with Amazon's existing consumer base of millions
                in order to grow the artisan economy and provide Amazon customers a greater selection.
              </h2>
              <br/>
            </div>
          </Row>
          <Row>
            <img
              className="d-block w-100"
              src={orange}
              alt="Third slide"
            />
            <br/>
          </Row>
          <Row>
            <h3><br/>Get to Know Us</h3>
            <div align="left">
            <h5><br/>This project was created by Cal Poly, Slo software engineering
              students as a project for their capstone class as requested by Amazon. This project will likely not be
            monitored after June 2019 given that the students involved are graduating. Learn more at: </h5>
              <a href="http://users.csc.calpoly.edu/~djanzen/setopics/capstone/" target="_blank">http://users.csc.calpoly.edu/~djanzen/setopics/capstone/</a>
            <br/>
            <br/>
            <br/>

            </div>
          </Row>
          <Row>
            <div align="center">
              <Timeline minEvents={3} placeholder>
                <TimelineEvent
                  icon={GoPencil}
                  title='Fall 2018'
                  subtitle='Design'
                />
                <TimelineEvent
                  icon={GoTools}
                  color='#87a2c7'
                  title='Winter 2019'
                  subtitle='Build'
                />
                <TimelineEvent
                  color='#64a338'
                  icon={GoRocket}
                  title='Fall 2018'
                  subtitle='Deploy'
                />
              </Timeline>
            </div>
          </Row>
          <Row>
            <Form to=	"rileycam@amazon.com"/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUsPage;