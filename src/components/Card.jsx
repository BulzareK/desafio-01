import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text>
          <h5>{props.text}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
