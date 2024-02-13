import {Accordion,Button} from 'react-bootstrap/Accordion';

export default function AccordionSection(key,value){
    return(
        <>
        <Accordion.Header>{key}</Accordion.Header>
        <Accordion.Body>
            <p>{value}</p>
        </Accordion.Body>
      </>
    )
}