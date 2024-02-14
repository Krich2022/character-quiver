import React, { useState } from "react";
import AccordionSection from "./ui/AccordionSection";
import Accordion from "react-bootstrap/Accordion";

export default function CharacterAccordion(props) {
  const { character } = props;
  const ignoredKeys = ["__typename", "created_at"];
  let accordionKey = -1;
  console.log(character);
  return (
    <Accordion defaultActiveKey={[0]} alwaysOpen>
      {character &&
        Object.entries(character).map(
          ([key, value], index) =>
            !ignoredKeys.includes(key) && (
              <AccordionSection key={key} item={{ key, value, index }} />
            )
        )}
    </Accordion>
  );
}
