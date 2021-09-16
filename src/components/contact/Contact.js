import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Heading from '../Heading';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterElement from '../FooterElement';

function Contact() {
  return (
    <>
      <div class="wrapper">
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={3} lg={2} className="order-md-2 mt-md-5 address-container">
              <ContactInfo />
            </Col>
            <Col md={8} lg={5}>
              <Heading content="Submit your details" className="mb-5"/>
              <Container className="form-container shadow-lg mb-5 mt-4 ">
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
        <FooterElement />
      </div>
    </>
  )
}

export default Contact
