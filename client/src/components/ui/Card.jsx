import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CharacterCard({ name, level, char_class, _id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${_id}`);
  };
  return (
    <Card className="container-background text-color m-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{`${char_class} Level:${level} `}</Card.Text>
        <Button
          variant="primary"
          onClick={handleClick}
          className="button-container">
          View Character
        </Button>
      </Card.Body>
    </Card>
  );
}
