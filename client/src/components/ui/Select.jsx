import { Form } from "react-bootstrap";

export default function Select(options) {
  return (
    <>
      <Form.Select aria-label="Default select example">
        <option>Choose A Class</option>
        {Array.isArray(options.options) &&
          options.options.map((option, index) => (
            <option key={index} value={option.index}>
              {option.name}
            </option>
          ))}
      </Form.Select>
    </>
  );
}
