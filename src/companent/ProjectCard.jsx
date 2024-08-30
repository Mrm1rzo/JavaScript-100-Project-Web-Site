import React from "react";
import { Button, Card } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img
        variant="top"
        src="https://d33wubrfki0l68.cloudfront.net/66c8ec49e850fcb56d446451/screenshot_2024-08-23-20-09-15-0000.webp"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/" variant="link">
          Git Hub
        </Button>
        <Button href="/" variant="link">
          Web Site
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
