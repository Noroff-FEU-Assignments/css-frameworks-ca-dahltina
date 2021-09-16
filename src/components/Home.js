import React from 'react';
import CarouselSlider from './CarouselSlider';
import TabSection from './TabSection';
import AccordionSection from './AccordionSection';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Container from 'react-bootstrap/Container';
import FooterElement from './FooterElement';

function Home() {
  return (
    <>
      <div class="wrapper">
      <CarouselSlider />
        <Container className="mt-5 mb-5">
          <Heading content="We do YAY things"/>
          <Paragraph content="Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et
            ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna.
            Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa." />
        </Container>
        <TabSection />
        <AccordionSection />
      </div>
      <FooterElement/>
    </>
  )
};

export default Home;
