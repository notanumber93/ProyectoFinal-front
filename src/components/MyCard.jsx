import { Card } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <Card key={props.key} style={{ minWidth: "18rem", maxWidth: "18rem", marginBottom: "10px", marginTop: "10px" }}>
      <Card.Img variant="top" src={props.poster} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.year}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>placeholder</Card.Footer>
    </Card>
  );
};

export default MyCard;
