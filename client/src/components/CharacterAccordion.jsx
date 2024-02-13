import React, { useState } from 'react';
import AccordionSection from './ui/AccordionSection';
import Accordion from 'react-bootstrap/Accordion';


export default function CharacterAccordion(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (


    <Accordion defaultActiveKey={['0']} alwaysOpen>
      
      {character.map((info,index)=>(
        <Accordion.Item eventKey={index}>
        <AccordionSection {...info}/>
      </Accordion.Item>
      ))}
    </Accordion>



  );
};

