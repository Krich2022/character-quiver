import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function ClassCard(props) {
  const description = {
    barbarian:
      "A fierce warrior of primitive background who can enter a battle rage, gaining enhanced strength, durability, and combat prowess.",
    bard: "An inspiring magician whose power echoes the music of creation, using their musical talents to weave spells and bolster their allies.",
    cleric:
      "A priestly champion who wields divine magic in service of a higher power, able to heal wounds, restore life, and smite enemies.",
    druid:
      "A priest of the Old Faith, wielding the powers of nature—moonlight and plant growth, fire and lightning—and adopting animal forms to commune with the natural world.",
    fighter:
      "A master of martial combat, skilled with a variety of weapons and armor, and able to unleash a flurry of attacks or defend with unmatched expertise.",
    monk: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection, moving with supernatural speed and agility.",
    paladin:
      "A holy warrior bound to a sacred oath, imbued with divine magic to protect the weak, smite evil, and bring justice to the land.",
    ranger:
      "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization, tracking enemies with precision and using the environment to their advantage.",
    rogue:
      "A scoundrel who uses stealth and trickery to overcome obstacles and enemies, striking with deadly precision and disappearing into the shadows.",
    sorcerer:
      "A spellcaster who draws on inherent magic from a gift or bloodline, casting spells with raw power and shaping magic with their will.",
    warlock:
      "A wielder of magic that is derived from a bargain with an extraplanar entity, gaining arcane abilities and making pacts for otherworldly knowledge.",
    wizard:
      "A scholarly magic-user capable of manipulating the structures of reality, studying ancient tomes and mastering spells to shape the world around them.",
  };

  return (
    <Card style={{ minHeight: "300px" }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{description[props.name.toLowerCase()]}</Card.Text>
        <Button variant="primary" onClick={props.onNextClick}>
          Next
        </Button>
      </Card.Body>
    </Card>
  );
}
