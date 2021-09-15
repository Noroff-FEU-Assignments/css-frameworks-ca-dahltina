import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Img1 from '../../images/news-images/news-1.jpg';
import Img2 from '../../images/news-images/news-2.jpg';
import Img3 from '../../images/news-images/news-3.jpg';
import Img4 from '../../images/news-images/news-4.jpg';
import Img5 from '../../images/news-images/news-5.jpg';
import Img6 from '../../images/news-images/news-6.jpg';
import Img7 from '../../images/news-images/news-7.jpg';
import Img8 from '../../images/news-images/news-8.jpg';

function Cards() {
  return (
    <div>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img2} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img3} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img4} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img5} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img6} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img7} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Img8} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>
                Nunc malesuada eget est fringilla dapibus.
              </Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cards;
