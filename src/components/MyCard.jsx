import { Card } from "react-bootstrap";

const MyCard = (params) => {
  return (
    <Card>
      <Card.Img variant="top" src={params.poster} />
      <Card.Body>
        <Card.Title>{params.title}</Card.Title>
        <Card.Subtitle>{params.year}</Card.Subtitle>
        <Card.Footer>placeholder</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default MyCard;