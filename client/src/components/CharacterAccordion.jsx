import React, { useState } from 'react';
import AccordionSection from './ui/AccordionSection';
import Accordion from 'react-bootstrap/Accordion';


export default function CharacterAccordion({character}){

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    {Object.entries(character).map(([key, value], index) => (
      <Accordion.Item eventKey={index}>
        <AccordionSection title={key} body={value} />
      </Accordion.Item>
    ))}
  </Accordion>
  );
};

