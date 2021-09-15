import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <Container>
        <i class="fas fa-envelope"></i><a href="mailto:hello@yay.com">hello@yay.com</a>
        <i class="fas fa-phone"></i><p>123 456 7890</p>
        <i class="fas fa-map-marker-alt"></i><p> 123 Some Street<br/>
              Somewhere<br/>
              Some City<br/>
              10000<br/>
        </p>
      </Container>
      <Container>
        <ContactForm />
      </Container>
    </div>
  )
}

export default Contact
