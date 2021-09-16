import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Img1 from '../images/tab-images/tab-1.jpg';
import Img2 from '../images/tab-images/tab-2.jpg';
import Img3 from '../images/tab-images/tab-3.jpg';

function AccordionSection() {
  return (
    <div className="d-md-none mb-5">
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First</Accordion.Header>
            <Accordion.Body>
              <div class="d-flex flex-column justify-content-center">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
                  pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
                  Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Image src={Img1} className="mt-2"/>
                <div className="d-flex justify-content-center share-icons mt-4">
                  <p>SHARE</p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second</Accordion.Header>
            <Accordion.Body>
            <div class="d-flex flex-column justify-content-center">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
                  pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
                  Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Image src={Img2} className="mt-2"/>
                <div className="d-flex justify-content-center share-icons mt-4">
                  <p>SHARE</p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third</Accordion.Header>
            <Accordion.Body>
            <div class="d-flex flex-column justify-content-center">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis
                  pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis.
                  Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Image src={Img3} className="mt-2"/>
                <div className="d-flex justify-content-center share-icons mt-4">
                  <p>SHARE</p>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  )
}

export default AccordionSection;
