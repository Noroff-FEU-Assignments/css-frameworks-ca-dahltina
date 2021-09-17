import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Img1 from '../../images/tab-images/tab-1.jpg';
import Img2 from '../../images/tab-images/tab-2.jpg';
import Img3 from '../../images/tab-images/tab-3.jpg';

function TabSection() {
  return (
    <div className="d-none d-md-block">
      <Container className="mb-5">
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="first" title="First">
            <Container className="mt-4">
              <Row>
                <Col>
                  <Image src={Img1} width="238px"/>
                </Col>
                <Col md={7} lg={8} xl={9}>
                  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus.
                  </p>
                  <div className="d-inline-flex share-icons">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="second" title="Second">
          <Container className="mt-4">
              <Row>
                <Col>
                  <Image src={Img2} width="238px"/>
                </Col>
                <Col md={7} lg={8} xl={9}>
                  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus.
                  </p>
                  <div className="d-inline-flex share-icons">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="third" title="Third">
          <Container className="mt-4">
              <Row>
                <Col>
                  <Image src={Img3} width="238px"/>
                </Col>
                <Col md={7} lg={8} xl={9}>
                  <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                    venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                    Sed condimentum mattis rhoncus.
                  </p>
                  <div className="d-inline-flex share-icons">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default TabSection;
