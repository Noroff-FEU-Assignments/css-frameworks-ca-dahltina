import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/carousel-images/carousel-1.jpg';
import Img2 from '../images/carousel-images/carousel-2.jpg';
import Img3 from '../images/carousel-images/carousel-3.jpg';

function CarouselSlider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselSlider;
