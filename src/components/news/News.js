import React from 'react'
import Cards from './Cards';
import Heading from '../Heading';
import Page from './Page';
import Container from 'react-bootstrap/Container';
import FooterElement from '../FooterElement';

function News() {
  return (
    <>
      <Container className="mt-4">
        <Heading content="News"/>
        <Page/>
      </Container>
      <Container >
        <Cards />
      </Container>
      <Container>
        <Page />
      </Container>
      <FooterElement />
    </>
  )
}

export default News;

// {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
//   <Cards />
// ))}
