import React from 'react';
import { connect } from 'react-redux';

import { Accordion } from 'react-bootstrap';
import {
  Container,
  Card,
  Name,
  Details
} from './styles';


function Content({ list }) {
  console.log(list);
  
  return (
    <Container>
      <Accordion as={Card} >
            <Accordion.Toggle as={Name} eventKey="0">
              <h2>Luke Skywalker</h2>
            </Accordion.Toggle>
            
            <Accordion.Collapse as={Details} eventKey="0">
              <p>Details...</p>
            </Accordion.Collapse>
      </Accordion>
    </Container>
  );
}

export default connect(state => ({ list: state }) )(Content);