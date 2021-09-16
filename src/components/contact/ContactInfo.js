import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactInfo() {
  return (
    <div>
      <Row>
        <Col xs={1} sm={1} md={2} className="mb-2">
          <i className="fas fa-envelope"></i>
        </Col>
        <Col className="mb-2">
          <a href="mailto:hello@yay.com">hello@yay.com</a>
        </Col>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={2} className="mb-2">
          <i className="fas fa-phone"></i>
        </Col>
        <Col className="mb-2">
          <p>123 456 7890</p>
        </Col>
      </Row>
      <Row>
        <Col xs={1} sm={1} md={2} className="mb-2">
          <i className="fas fa-map-marker-alt"></i>
        </Col>
        <Col className="mb-2">
          <p> 123 Some Street<br/>
              Somewhere<br/>
              Some City<br/>
              10000<br/>
          </p>
        </Col>
      </Row>








    </div>
  )
}

export default ContactInfo;
