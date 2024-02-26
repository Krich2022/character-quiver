import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
export default function CharacterTransition(option) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        {option.title}
      </Button>
      <Collapse in={open}>
        <div
          className="container-background  enable-rounded text-color"
          id="example-collapse-text">
          {option.select.map((selectOption, index) => (
            <Form.Select key={index} aria-label={`Select ${selectOption}`}>
              <option>Select {selectOption}</option>
              {/* You can populate the options based on your requirements */}
            </Form.Select>
          ))}
        </div>
      </Collapse>
    </div>
  );
}
