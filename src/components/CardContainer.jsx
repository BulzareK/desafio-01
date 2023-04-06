import Card from "react-bootstrap/Card";

const CardContainer = ({ url, title, type }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={{ url }} />
      <Card.Body>
        <Card.Title>
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text>{type}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
