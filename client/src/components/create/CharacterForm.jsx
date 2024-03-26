import { Form, Button, Col, Row } from "react-bootstrap";
import { GET_PROF_AND_EQUIP } from "../../utils/queries/classQueries";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import dnd5eClient from "../../utils/dnd5eServer";

export default function CharacterForm({ charClass }) {
  const [classInfo, setClassInfo] = useState({});
  const [prof, setProf] = useState([]);
  const { loading, error, data } = useQuery(GET_PROF_AND_EQUIP, {
    client: dnd5eClient,
    variables: { index: charClass.toLowerCase() },
  });

  useEffect(() => {
    if (data) {
      setClassInfo(data.class);
    }
  }, [data]);
  useEffect(() => {
    if (classInfo) {
      for (let key in classInfo) {
        if (key === "desc") {
          setProf(key);
        }
      }
    }
  }, [classInfo]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Form className="container-fluid mt-3 forum-sizing">
        <Row>
          <h2>Character Information</h2>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label htmlFor="name" visuallyHidden="true">
                Character Name
              </Form.Label>
              <Form.Control type="text" placeholder="Character Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="level">
              <Form.Label htmlFor="level" visuallyHidden="true">
                Level
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select a Level</option>
                {[...Array(20)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="alignment">
              <Form.Label
                htmlFor="alignment"
                visuallyHidden="true"
              ></Form.Label>
              <Form.Select aria-label="alignment">
                <option>Select an Alignment</option>
                <option value="lawful-good">Lawful Good</option>
                <option value="neutral-good">Neutral Good</option>
                <option value="chaotic-good">Chaotic Good</option>
                <option value="lawful-neutral">Lawful Neutral</option>
                <option value="true-neutral">True Neutral</option>
                <option value="chaotic-neutral">Chaotic Neutral</option>
                <option value="lawful-evil">Lawful Evil</option>
                <option value="neutral-evil">Neutral Evil</option>
                <option value="chaotic-evil">Chaotic Evil</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {["STR", "DEX", "CON", "INT", "WIS", "CHA"].map((mod) => (
            <Form.Group as={Col} controlId={mod}>
              <Form.Label visuallyHidden="true">{mod}</Form.Label>
              <Form.Control type="number" placeholder={mod} />
            </Form.Group>
          ))}
        </Row>

        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </>
  );
}
