import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div>
      <Container>
        <a href="mailto:hello@yay.com">hello@yay.com</a>
        <p>123 456 7890</p>
        <p> 123 Some Street<br/>
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
