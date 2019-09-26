import React, { useState, useEffect } from 'react';
import { loadList } from '../../services/api';

import { Accordion } from 'react-bootstrap';
import {
  Container,
  Card,
  Name,
  Details
} from './styles';


export default function Header() {
  const [ list, setList ] = useState({});
  
  useEffect(() =>{
    async function load(){
      const data = await loadList();
      
      setList(data)
    }
    load();
  })

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
