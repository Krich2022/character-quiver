import React, { useState } from "react";
import AccordionSection from "./ui/AccordionSection";
import Accordion from "react-bootstrap/Accordion";

export default function CharacterAccordion(props) {
  const { character } = props;
  let accordionKey = -1;
  console.log(character);
  return (
    <Accordion defaultActiveKey={[0]} alwaysOpen>
      {character &&
        Object.entries(character).map(
          ([key, value], index) =>
            key !== "_typename" && (
              <AccordionSection key={key} item={{ key, value }} />
            )
        )}
    </Accordion>
  );
}
