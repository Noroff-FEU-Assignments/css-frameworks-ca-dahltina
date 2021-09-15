import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';

function TabSection() {
  return (
    <div className="d-none d-md-block">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home"></Tab>
          <Tab eventKey="profile" title="Profile"></Tab>
          <Tab eventKey="contact" title="Contact" disabled></Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default TabSection;
