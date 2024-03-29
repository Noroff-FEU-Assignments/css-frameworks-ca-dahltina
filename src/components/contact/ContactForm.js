import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mt-3">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="mt-3">Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mt-3">
            Website
          </Form.Label>
          <InputGroup>
            <InputGroup.Text>https://</InputGroup.Text>
            <FormControl id="inlineFormInputGroupUsername" />
          </InputGroup>
        </Form.Group>

        <Form.Label className="mt-3">Message</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: '224px' }}
          />

        <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm;
