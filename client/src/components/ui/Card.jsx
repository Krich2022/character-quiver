import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CharacterCard({ title, name, level, charClass, _id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push(`/character/${_id}`);
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`${name}: ${charClass} Level:${level} `}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
