import { Accordion } from "react-bootstrap";

export default function AccordionSection({ item }) {
  return (
    <>
      <Accordion.Header>{item.key}</Accordion.Header>
      <Accordion.Body>
        <p>{item.value}</p>
      </Accordion.Body>
    </>
  );
}
