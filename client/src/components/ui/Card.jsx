import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CharacterCard({ title, name, level, charClass, id }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/character/${id}`);
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`${name}: ${charClass} Level:${level} `}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
