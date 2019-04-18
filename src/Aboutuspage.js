import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Container, Row, Col } from "react-bootstrap";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { GoRocket } from 'react-icons/go'
import { GoPencil } from 'react-icons/go'
import { GoTools } from 'react-icons/go'

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TermsPage">
        <Container>
          <Row>
            <div className="Title">
              <h1>About Us</h1>
            </div>
          </Row>
          <Row>
            <div>
              <Timeline minEvents={3} placeholder>
                <TimelineEvent
                  icon={GoPencil}
                  title='Fall 2018'
                  subtitle='design'
                />
                <TimelineEvent
                  icon={GoTools}
                  title='Winter 2019'
                  subtitle='Build'
                />
                <TimelineEvent
                  icon={GoRocket}
                  title='Fall 2018'
                  subtitle='Deploy'
                />
              </Timeline>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutUsPage;