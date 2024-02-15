import { Accordion } from "react-bootstrap";

export default function AccordionSection({ item }) {
  const normalKeys = {
    armor_class: "Armor Class",
    char_class: "Character Class",
    charisma: "Charisma",
    constitution: "Constitution",
    created_at: "Created At",
    dexterity: "Dexterity",
    hit_dice: "Hit Dice",
    hit_points: "Hit Points",
    initiative: "Initiative",
    intelligence: "Intelligence",
    level: "Level",
    name: "Name",
    perception: "Perception",
    player: "Player",
    speed: "Speed",
    strength: "Strength",
    sub_class: "Subclass",
    wisdom: "Wisdom",
  };

  const headerText = normalKeys[item.key] || item.key;

  return (
    <Accordion.Item eventKey={item.index}>
      <Accordion.Header>{headerText}</Accordion.Header>
      <Accordion.Body>
        <p>{item.value}</p>
      </Accordion.Body>
    </Accordion.Item>
  );
}
