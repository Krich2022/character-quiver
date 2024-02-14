import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CharacterCard({ name, level, charClass, _id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${_id}`);
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{`${charClass} Level:${level} `}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          View Character
        </Button>
      </Card.Body>
    </Card>
  );
}
