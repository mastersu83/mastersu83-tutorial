import React from "react";
import { Card, Col, Nav } from "react-bootstrap";

const CardItem = ({ title, id }) => {
  return (
    <Col md={4}>
      <h3>{title}</h3>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
        <Card.Body>
          <Card.Title>
            <Nav.Link href={`/post/${id}`}>Card title</Nav.Link>
          </Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
