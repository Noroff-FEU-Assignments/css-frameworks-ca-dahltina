import React from 'react';
import Container from 'react-bootstrap/Container';

function FooterElement() {
  return (
      <footer className="d-flex flex-sm-column flex-md-row pt-4 pb-4">
        <Container>
          <div className="d-flex justify-content-center mb-2">
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
          </div>
          <div className="d-flex justify-content-between">
            <a href="mailto:hello@yay.com">hello@yay.com</a>
            <span>Copyright 2020</span>
          </div>
        </Container>
      </footer>
  )
}

export default FooterElement;
