import {Accordion,ListGroup} from 'react-bootstrap/Accordion';

export default function AccordionSection(title,body){
    return(
        <>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
        <ListGroup as="ol">
            {body.map((text, index) => (
              <ListGroup.Item as="li" key={index}>
                {text}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </>
    )
}