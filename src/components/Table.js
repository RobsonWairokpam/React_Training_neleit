import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Table = () => {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col sm>
            <Button variant="primary">Click</Button>
          </Col>
          <Col sm>
            <Button variant="primary">Click</Button>
          </Col>
          <Col sm>
            <Button variant="primary">Click</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
