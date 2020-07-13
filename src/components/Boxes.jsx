import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./BoxesComponent.module.css";

const Boxes = (props) => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState("");
  const [wide, setWide] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const [...currentBoxes] = boxes;
    currentBoxes.push({ color, wide });
    setBoxes(currentBoxes);
    console.log(color);
    console.log(wide);
    resetForm();
  };

  const resetForm = () => {
    setColor("");
    setWide("");
    console.log("Form reset.");
  };

  return (
    <Container>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Row className="my-4">
          <Form.Label column sm="2">
            <h3>Color</h3>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              controlid="color"
              size="lg"
              type="text"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Form.Label column sm="2">
            <h3>Width</h3>
          </Form.Label>
          <Col sm="10">
            <Form.Control
              controlid="width"
              size="lg"
              type="number"
              max="250"
              min="25"
              step="25"
              onChange={(e) => setWide(e.target.value)}
              value={wide}
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm="2"></Col>
          <Col sm="10">
            <Button type="submit" className="btn-lg btn-block">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="my-5">
        <Col>
          {boxes.map((box, i) => (
            <div
              key={i}
              className={styles.boxStyle}
              style={{ backgroundColor: box.color, width: box.wide + "px" }}
            >
              <p id="myBox"></p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Boxes;
